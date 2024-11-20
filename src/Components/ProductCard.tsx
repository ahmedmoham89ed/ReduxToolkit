import React from 'react'
import Button from '../UI/Button'
import { useAppDispatch } from '../App/Store'
import {AddItemToCartAction} from "../App/features/Cart/CartSlice"
import { Iproduct } from '../Interface/Index'

interface ProductCardProps{
    product:Iproduct;
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
 
  const dispatch= useAppDispatch();
  const {id,title,price,thumbnail}=product;
  return (
    <>
     <div className=" max-w-2xl text-center mt-10 mx-auto ">
        <h2>cart:</h2>
        <Button onClick={()=>dispatch(AddItemToCartAction(product))} className='max-w-sm' > Add To Card</Button>
     </div>
    
    </>
  )
}

export default ProductCard