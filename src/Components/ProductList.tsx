import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Iproduct } from "../Interface/Index";
import { useGetProductListQuery } from "../App/features/Products/productSlicer";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, selectProducts } from "../App/features/Products/createAsyncThunkEx";
import { AppDispatch } from "../App/Store";

const ProductList = () => {
  const dispatch=useDispatch<AppDispatch>();
  const {data,error,loading}= useSelector(selectProducts);
  useEffect(()=>{
   dispatch(getProductList());
  },[dispatch]);

  if(loading) return <h3>...loading</h3>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: Iproduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;