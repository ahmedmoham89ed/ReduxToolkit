import React from 'react'
interface Iprops{
    className?:string,
}
const TextArea = ({className}:Iprops) => {
  return (
    <>
     <textarea name="" id="" className='border-[2px] border-indigo-600 w-[440px] h-44 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600 hover:ring-2 hover:ring-indigo-500 hover:border-indigo-500 text-xl font-semibold indent-3 pt-2 transition-all delay-150 pl-2  ' ></textarea>
    </>
  )
}

export default TextArea