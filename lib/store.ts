import { create } from "zustand";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { useAuth } from "@clerk/nextjs";

type Transaction = {
  id: string;
  type: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
};

type FinanceStore = {
  transactions: Transaction[];
  totalIncome: number;
  totalExpenses: number;
  remainingBalance: number;
  budget: number;
  isLoading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
  addTransaction: (transaction: Omit<Transaction, "id">) => Promise<void>;
  setBudget: (amount: number) => Promise<void>;
};

export const useFinanceStore = create<FinanceStore>((set, get) => ({
  transactions: [],
  totalIncome: 0,
  totalExpenses: 0,
  remainingBalance: 0,
  budget: 0,
  isLoading: false,
  error: null,
  fetchTransactions: async () => {
    const { getToken } = useAuth();
    set({ isLoading: true, error: null });
    try {
      const token = await getToken();
      const userId = await getUserId();
      const q = query(
        collection(db, "transactions"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const transactions: Transaction[] = [];
      querySnapshot.forEach((doc) => {
        transactions.push({ id: doc.id, ...doc.data() } as Transaction);
      });
      const totalIncome = transactions.reduce(
        (sum, t) => (t.type === "income" ? sum + t.amount : sum),
        0
      );
      const totalExpenses = transactions.reduce(
        (sum, t) => (t.type === "expense" ? sum + t.amount : sum),
        0
      );
      const budgetDoc = await getDocs(
        query(collection(db, "budgets"), where("userId", "==", userId))
      );
      let budget = 0;
      budgetDoc.forEach((doc) => {
        budget = doc.data().amount;
      });
      set({
        transactions,
        totalIncome,
        totalExpenses,
        budget,
        remainingBalance: budget - totalExpenses,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch transactions", isLoading: false });
    }
  },
  addTransaction: async (transaction) => {
    const { getToken } = useAuth();
    set({ isLoading: true, error: null });
    try {
      const token = await getToken();
      const userId = await getUserId();
      const docRef = await addDoc(collection(db, "transactions"), {
        ...transaction,
        userId,
        date: Timestamp.fromDate(transaction.date),
      });
      const newTransaction = { id: docRef.id, ...transaction };
      set((state) => {
        const newTransactions = [...state.transactions, newTransaction];
        const newTotalIncome = newTransactions.reduce(
          (sum, t) => (t.type === "income" ? sum + t.amount : sum),
          0
        );
        const newTotalExpenses = newTransactions.reduce(
          (sum, t) => (t.type === "expense" ? sum + t.amount : sum),
          0
        );
        const newBudget =
          transaction.type === "income"
            ? state.budget + transaction.amount
            : state.budget;
        const newRemainingBalance = newBudget - newTotalExpenses;
        return {
          transactions: newTransactions,
          totalIncome: newTotalIncome,
          totalExpenses: newTotalExpenses,
          budget: newBudget,
          remainingBalance: newRemainingBalance,
          isLoading: false,
        };
      });
    } catch (error) {
      set({ error: "Failed to add transaction", isLoading: false });
    }
  },
  setBudget: async (amount) => {
    const { getToken } = useAuth();
    set({ isLoading: true, error: null });
    try {
      const token = await getToken();
      const userId = await getUserId();
      const budgetRef = collection(db, "budgets");
      const q = query(budgetRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await addDoc(budgetRef, { userId, amount });
      } else {
        const docId = querySnapshot.docs[0].id;
        await updateDoc(doc(db, "budgets", docId), { amount });
      }
      set((state) => ({
        budget: amount,
        remainingBalance: amount - state.totalExpenses,
        isLoading: false,
      }));
    } catch (error) {
      set({ error: "Failed to set budget", isLoading: false });
    }
  },
}));

async function getUserId() {
  const { userId } = useAuth();
  if (!userId) throw new Error("User not authenticated");
  return userId;
}
