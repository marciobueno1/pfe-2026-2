import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTarefaStore = create(
  persist(
    (set) => ({
      filtrarConcluidas: false,
      toggleFiltrarConcluidas: () =>
        set((state) => ({ filtrarConcluidas: !state.filtrarConcluidas })),
    }),
    {
      name: "tarefa-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
