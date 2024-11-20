import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Iproduct } from '../../../Interface/Index';
import { RootState } from '../../Store';
import {addItemToShoppingCart} from "../../../Utils/Function"

export interface CounterState {
  cartitems:Iproduct[];
}

const initialState: CounterState = {
  cartitems:[]
}

const CartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    AddItemToCartAction:(state,actionpayload:PayloadAction<Iproduct>)=>{
      state.cartitems=addItemToShoppingCart(state.cartitems,actionpayload.payload);
    }
  }
})

export const {AddItemToCartAction}=CartSlice.actions;
export const cartSelector = ({cart}:RootState) => cart;
export default CartSlice.reducer