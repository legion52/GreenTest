import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SliceState {
  isAuth: boolean;
}

const initialState = {
  isAuth: localStorage.getItem('idInstance')?true:false,
} as SliceState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    signIn(state, action: PayloadAction<any>) {
        localStorage.setItem("idInstance", action.payload.idInstance)
        localStorage.setItem("apiTokenInstance", action.payload.apiTokenInstance)
      state.isAuth = true;
    },
  },
});

export const { changeAuthStatus, signIn } = userSlice.actions;
export default userSlice.reducer;
