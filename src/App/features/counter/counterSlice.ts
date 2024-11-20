import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  text:string
}

const initialState: CounterState = {
  value: 0,
  text:"counter text"
}

 const counterSlice = createSlice({
  name:"counter",
  initialState,
  reducers:{
    increaseAction:(state,ActionPayload:PayloadAction<number>)=>{
        state.value+=ActionPayload.payload
    }
  }
})

export const {increaseAction}=counterSlice.actions;

export default counterSlice.reducer