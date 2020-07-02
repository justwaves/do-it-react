import { createSlice } from '@reduxjs/toolkit';

export const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState: {
    params: {},
  },
  reducers: {
    setFilter: (state, action) => {
      const code = action.payload;
      state.params = code;
    },
  },
});

export const { setFilter } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;
