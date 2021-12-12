/* 

import { createSlice } from '@reduxjs/toolkit'

export const navActivator = createSlice({
  name: 'activator',
  initialState: {
    active: 'navigation__active'
  },
  reducers: {
    active: (state) => {
      state.active = 'navigation__active';
    },
    deactive: (state) => {
      state.active = '';
    }
  }
});

export const { active, deactive } = navActivator.actions;

export default navActivator.reducer; 

*/