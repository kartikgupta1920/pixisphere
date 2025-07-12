import { create } from 'zustand';

export const usePhotographerStore = create((set) => ({
  search: '',
  sort: '',
  rating: 0,
  styles: [],
  city: '',
  priceRange: [0, 20000],
  setFilters: (filters) => set((state) => ({
    ...state,
    ...filters
  }))
}));
