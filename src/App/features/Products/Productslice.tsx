import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getProductList } from './createAsyncThunkEx';

export const productslice=createApi({
    reducerPath:"products",
    tagTypes:['Products'],
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints:(builder)=>({
        getProductList:builder.query({
            query:()=>{
                return{
                   url:"/products" 
                }
            }
        })
    })
})
const {useGetProductListQuery}=productslice
export default productslice.reducer;