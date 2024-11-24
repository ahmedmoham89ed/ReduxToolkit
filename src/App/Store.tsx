import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import counterSlice  from './features/counter/counterSlice'
import CartSlice  from './features/Cart/CartSlice'
import { productsApi } from './features/Products/productSlicer'
import ProductSlice from "./features/Products/createAsyncThunkEx";
import { productslice } from './features/Products/Productslice'
const store = configureStore({
  reducer: {
    [productslice.reducerPath]:productslice.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
    cart:CartSlice,
    counter:counterSlice,
    Products:ProductSlice,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware({
    serializableCheck:false
  }).concat([productslice.middleware,productsApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default store 