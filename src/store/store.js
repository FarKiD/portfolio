import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../util/languageSlice';

export default configureStore({
	reducer: {
		language: languageReducer
	}
});