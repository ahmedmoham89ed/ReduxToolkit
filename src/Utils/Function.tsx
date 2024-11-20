import React from "react";
import { Iproduct } from "../Interface/Index";
export const addItemToShoppingCart = (cartItems:Iproduct[],product:Iproduct)=>{

  // If exits 
  const exits = cartItems.find(item=>item.id===product.id);

  if(exits){
    return cartItems.map(item=>{
      return item.id === product.id ? {...item, qty:item.qty + 1} : item;
    });
  }
  return [...cartItems,{...product,qty:1}];
}