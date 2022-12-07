import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './storeslice'
import likeReducer from './likeslice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    like:likeReducer,
  },
})