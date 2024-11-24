import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Iproduct } from "../Interface/Index";
import { useGetProductListQuery } from "../App/features/Products/productSlicer";
import { useDispatch } from "react-redux";
import { getProductList } from "../App/features/Products/createAsyncThunkEx";
import { AppDispatch } from "../App/Store";

const ProductList = () => {
  const dispatch=useDispatch<AppDispatch>();

  useEffect(()=>{
   dispatch(getProductList());
  },[dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {[].map((product: Iproduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;