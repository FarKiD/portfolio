import { createSlice } from '@reduxjs/toolkit';

import contentEN from './contentEN.json';
import contentFA from './contentFA.json';
import contentJP from './contentJP.json';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: contentEN
  },
  reducers: {
    switchEnglish: (state) => {
      state.value = contentEN
    },
    switchFarsi: (state) => {
      state.value = contentFA
    },
    switchJapanese: (state) => {
      state.value = contentJP
    }
  }
});

export const { switchEnglish, switchFarsi, switchJapanese } = languageSlice.actions;

export default languageSlice.reducer;