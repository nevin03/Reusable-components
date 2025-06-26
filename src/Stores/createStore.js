import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const createStore = (storeFn, options = {}) => {
  let store = storeFn;

  if (options.persist) {
    store = persist(store, {
      name: options.persist.name || "zustand-storage",
      ...options.persist,
    });
  }

  if (options.devtools) {
    store = devtools(store);
  }

  return create(store);
};
