import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    warning: false,
    showMessage: false,
  },
  reducers: {
    showMessage: (state, { payload: { message, warning } }) => {
      state.showMessage = true;
      state.message = message;
      state.warning = warning;
    },
    hideMessage: (state) => {
      state.message = '';
      state.showMessage = false;
    },
  },
});

export const { showMessage, hideMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
