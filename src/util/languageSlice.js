import { createSlice } from '@reduxjs/toolkit';

import Cookies from 'universal-cookie';

import contentEN from './contentEN.json';
import contentFA from './contentFA.json';
import contentJP from './contentJP.json';

const cookies = new Cookies();

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: contentEN
  },
  reducers: {
    switchEnglish: (state) => {
      state.value = contentEN;
      cookies.set('language', 'english', { path: '/' });
    },
    switchFarsi: (state) => {
      state.value = contentFA;
      cookies.set('language', 'farsi', { path: '/' });
    },
    switchJapanese: (state) => {
      state.value = contentJP;
      cookies.set('language', 'japanese', { path: '/' });
    }
  }
});

export const { switchEnglish, switchFarsi, switchJapanese } = languageSlice.actions;

export default languageSlice.reducer;