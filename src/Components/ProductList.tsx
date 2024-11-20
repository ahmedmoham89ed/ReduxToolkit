import React from "react";
import ProductCard from "./ProductCard";
import { Iproduct } from "../Interface/Index";
import { useGetProductListQuery } from "../App/features/Products/productSlicer";

const ProductList = () => {
  const {isLoading,data}=useGetProductListQuery([]);
  

  if(isLoading)return <h3>....Loading</h3>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: Iproduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;