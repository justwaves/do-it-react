import { createSlice } from '@reduxjs/toolkit';

export const appRouterSlice = createSlice({
  name: 'appRouter',
  initialState: {
    location: {},
  },
  reducers: {
    setLocation: (state, action) => {
      const location = action.payload;
      state.location = location;
    },
  },
});

export const { setLocation } = appRouterSlice.actions;
export default appRouterSlice.reducer;
