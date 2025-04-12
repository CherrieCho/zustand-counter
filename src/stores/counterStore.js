import { create } from "zustand";

const counterStore = create((set) => ({
  count: 0,
  increaseBy: (value) => set((state) => ({ count: state.count + value })),
  decreaseBy: (value) => set((state) => ({ count: state.count - value })),
  reset: () => set((state) => ({ count: (state.count = 0) })),
}));

export default counterStore;
