import React, { useEffect, useState } from "react";
import api from "../utilis/api";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await api.get("/getProducts");
    setProducts(res.data);
  };

  const deleteProduct = async (id: number) => {
    await api.delete(`/deleteProduct/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={deleteProduct} />
      ))}
    </div>
  );
};

export default ProductList;
