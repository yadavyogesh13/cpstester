import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

export interface TestResult {
  id: string;
  type: "cps" | "typing" | "spacebar" | "reaction";
  score: number;
  duration: number;
  timestamp: number;
  details?: Record<string, number>;
}

export function useTestHistory() {
  const [history, setHistory] = useLocalStorage<TestResult[]>("testHistory", []);

  const addResult = (result: Omit<TestResult, "id" | "timestamp">) => {
    const newResult: TestResult = {
      ...result,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    setHistory((prev) => [newResult, ...prev].slice(0, 50)); // Keep last 50 results
    return newResult;
  };

  const clearHistory = () => setHistory([]);

  const getByType = (type: TestResult["type"]) => 
    history.filter((r) => r.type === type);

  const getBestScore = (type: TestResult["type"]) => {
    const typeResults = getByType(type);
    if (typeResults.length === 0) return null;
    return Math.max(...typeResults.map((r) => r.score));
  };

  return { history, addResult, clearHistory, getByType, getBestScore };
}
