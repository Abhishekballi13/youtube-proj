import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_COUNT, OFFSET_LIVECHAT } from "./constants";


const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            //it will restrict our message or length to 10
            //when we are adding one message it will remove one message
            state.messages.splice(LIVECHAT_COUNT,1)
              //unshift is basically like push
            //but it will push new messages first
            state.messages.push(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;