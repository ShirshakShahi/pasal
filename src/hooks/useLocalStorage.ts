/** @format */

import { useEffect, useState } from "react";

type Value<T> = T | null;

function useLocalStorage<T>(
  key: string,
  initialValue: Value<T>
): [Value<T>, (value: Value<T>) => void] {
  const [storedValue, setStoredValue] = useState<Value<T>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error retrieving value from localStorage: ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (storedValue === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error(`Error storing value in localStorage: ${error}`);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
