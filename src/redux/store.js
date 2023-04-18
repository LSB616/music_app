import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { spotifyApi } from './services/spotify';
import { billboardApi } from './services/billboard';

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [billboardApi.reducerPath]: billboardApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(billboardApi.middleware)
});
