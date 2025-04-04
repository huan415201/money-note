import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  startDay: number;
};

const initialState: AppState = {
  startDay: 1,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStartDay: (state, action: PayloadAction<number>) => {
      state.startDay = action.payload;
    },
  },
});

export const { setStartDay } = appSlice.actions;

export const appReducer = appSlice.reducer;
