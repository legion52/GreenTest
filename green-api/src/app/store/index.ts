import { configureStore } from "@reduxjs/toolkit";
import { baseSliceAPI } from "../../shared/api/base-api";
import chatsSlice from "../../entities/chats/chatSlice";
import userSlice from "../../entities/user/userSlice";

export const store = configureStore({
  reducer: {
    [baseSliceAPI.reducerPath]: baseSliceAPI.reducer,
    chats:chatsSlice,
    user:userSlice
  },
  middleware: (getDefaultMiiddleware) =>
    getDefaultMiiddleware().concat(baseSliceAPI.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;