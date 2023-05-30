import { configureStore } from '@reduxjs/toolkit';
import thaliReducer from './thaliSlice';

export const store = configureStore({
	reducer: {
		thali: thaliReducer,
	},
});
