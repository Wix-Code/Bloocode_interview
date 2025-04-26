// store/podcastFilterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  sortBy: 'newest' | 'oldest' | 'title';
  category: string;
}

const initialState: FilterState = {
  sortBy: 'newest',
  category: '', // or 'All'
};

const podcastFilterSlice = createSlice({
  name: 'podcastFilter',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<'newest' | 'oldest' | 'title'>) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setSortBy, setCategory } = podcastFilterSlice.actions;
export default podcastFilterSlice.reducer;