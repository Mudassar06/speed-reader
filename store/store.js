import { create } from 'zustand';

const useStore = create((set) =>({
    array: [],
    setArray: (item) => set((state) => ({ array: item }))
}));

export default useStore;