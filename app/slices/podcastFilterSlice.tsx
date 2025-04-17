// store/podcastFilterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  sortBy: 'name' | 'date';
  category: string;
}

const initialState: FilterState = {
  sortBy: 'date',
  category: '', // or 'All'
};

const podcastFilterSlice = createSlice({
  name: 'podcastFilter',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<'name' | 'date'>) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setSortBy, setCategory } = podcastFilterSlice.actions;
export default podcastFilterSlice.reducer;