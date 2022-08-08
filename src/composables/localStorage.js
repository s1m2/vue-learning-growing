import { ref, readonly } from "vue";

export function useLocalStorage(key, value) {
  const item = ref({});

  const getItem = () => {
    item.value = localStorage.getItem(key);
  };

  const setItem = () => {
    localStorage.setItem(key, value);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  return { item: readonly(item), getItem, setItem, removeItem };
}
