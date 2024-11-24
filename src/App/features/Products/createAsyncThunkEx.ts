import { RootState } from './../../Store';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../../../Interface/Index";
import axiosInstance from "../../../Config/AxiosConfig";

interface productsState {
  loading: boolean;
  data: Iproduct[];
  error: null | string;
}

const initialState: productsState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
 const productsSlice = createSlice({
  name: "products", // ** Attached with Store
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload as string;
      });
  },
});
export const selectProducts = (state: RootState) => state.Products;
export default productsSlice.reducer;
