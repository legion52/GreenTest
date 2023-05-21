import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SliceState { 
    allChats:Ichats[]|null
    currentChat:Ichats|null
 } 
 interface Ichats {
    number:string,
    name:string
 }
// const initialState: SliceState = { state: 'loading' }

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
		allChats:[],
        currentChat:null
} as SliceState,
reducers: {
    selectChat(state, action:any) {
      state.currentChat = action.payload
    },
    addNewChat(state, action:PayloadAction<Ichats>) {
        state.currentChat = action.payload
        state.allChats?.push(action.payload)
      },
  }
})

export const { selectChat, addNewChat } = chatsSlice.actions
export default chatsSlice.reducer
