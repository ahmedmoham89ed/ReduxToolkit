import React from 'react'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../App/Store'
import { increaseAction } from '../App/features/counter/counterSlice'

const Counter = () => {
    const {text,value}=useSelector((state:RootState)=>state.counter);
   const dispatch= useDispatch();
  return (
    <>
     <div className="max-w-2xl text-center mx-auto">
            <h2>counter : {value}</h2>
            <Button onClick={()=>dispatch(increaseAction(5))} className='bg-black max-w-sm '>{text}</Button>
     </div>
    </>
  )
}

export default Counter