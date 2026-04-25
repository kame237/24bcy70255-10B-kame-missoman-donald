// store/useAuthStore.ts
import { create } from 'zustand';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  _hasHydrated: boolean;
  setUser: (user: User | null) => void;
  setHasHydrated: (state: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  _hasHydrated: true, // Initialisé à true pour éviter l'état de chargement
  setUser: (user) => set({ user }),
  setHasHydrated: (state) => set({ _hasHydrated: state }),
  logout: () => set({ user: null, _hasHydrated: true }),
}));