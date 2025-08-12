import { create } from "zustand";

const useAuthStore = create((ser) => ({
  user: null,
  setUser: (user) => set({ user }),
  logOut: () => set({ user: null }),
}));

export default useAuthStore;
