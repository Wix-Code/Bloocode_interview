"use client"
import podcastReducer from '../slices/podcastSlice'
import podcastFilterReducer from '../slices/podcastFilterSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
    podcastFilter: podcastFilterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;