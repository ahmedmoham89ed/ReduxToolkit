import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import counterSlice  from './features/counter/counterSlice'
import CartSlice  from './features/Cart/CartSlice'
import { productsApi } from './features/Products/productSlicer'

const store = configureStore({
  reducer: {
    counter:counterSlice,
    cart:CartSlice,
    [productsApi.reducerPath]:productsApi.reducer
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware({
    serializableCheck:false
  }).concat([productsApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default store 