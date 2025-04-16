import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Podcast } from '../utils/interfaces';


interface PodcastState {
  selectedPodcast: Podcast | null;
}

const initialState: PodcastState = {
  selectedPodcast: null,
};

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setSelectedPodcast: (state, action: PayloadAction<Podcast>) => {
      state.selectedPodcast = action.payload;
    },
  },
});

export const { setSelectedPodcast } = podcastSlice.actions;
export default podcastSlice.reducer;