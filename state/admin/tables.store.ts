import { create } from "zustand";

interface Store {
  selectedId: string;
  setSelectedId: (id: string) => void;
}

const tableStore = create<Store>((set) => ({
  selectedId: "",
  setSelectedId: (id) => set(() => ({ selectedId: id })),
}));

export default tableStore;