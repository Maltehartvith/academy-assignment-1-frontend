import { User } from '@supabase/supabase-js';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type AuthUserStore = {
  authUser: User | null;
  setAuthUser: (authUser: User) => void;
  resetAuthUser: () => void;
};

export const useAuthUserStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      authUser: null,
      setAuthUser: (authUser) => set({ authUser }),
      resetAuthUser: () => set({ authUser: null }),
    }),
    {
      name: 'auth-user-storage',
    }
  )
);

type DarkMode = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const useDarkMode = create<DarkMode>()(
  persist(
  (set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
})));

type goBackState = {
  goBack: boolean;
  toggleGoBack: () => void;
}
export const useGoBack = create<goBackState>()(
  persist(
  (set) => ({
    goBack: false,
    toggleGoBack: () => set((state) => ({ goBack: !state.goBack })),
})));
