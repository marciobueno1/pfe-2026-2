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

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set((state) => ({ user: user })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
