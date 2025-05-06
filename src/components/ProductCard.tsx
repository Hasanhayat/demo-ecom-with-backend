import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  product: Product;
  onDelete: (id: number) => void;
};

const ProductCard: React.FC<Props> = ({ product, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold text-blue-600 mt-1">${product.price}</p>
      <button
        onClick={() => onDelete(product.id)}
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
