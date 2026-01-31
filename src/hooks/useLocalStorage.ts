import { useState, useCallback } from "react";

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

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? (value as (prev: T) => T)(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (e) {
          console.warn(`Error writing localStorage key "${key}":`, e);
        }
        return valueToStore;
      });
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

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

  const addResult = useCallback((result: Omit<TestResult, "id" | "timestamp">) => {
    const newResult: TestResult = {
      ...result,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    setHistory((prev) => [newResult, ...prev].slice(0, 50)); // Keep last 50 results
    return newResult;
  }, [setHistory]);

  const clearHistory = useCallback(() => setHistory([]), [setHistory]);

  const getByType = useCallback((type: TestResult["type"]) => 
    history.filter((r) => r.type === type), [history]);

  const getBestScore = useCallback((type: TestResult["type"]) => {
    const typeResults = history.filter((r) => r.type === type);
    if (typeResults.length === 0) return null;
    return Math.max(...typeResults.map((r) => r.score));
  }, [history]);

  return { history, addResult, clearHistory, getByType, getBestScore };
}
