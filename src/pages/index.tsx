import Head from "next/head";
import ProductList from "../components/ProductList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>E-commerce Store</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link href="/add-product">
        <a className="mb-4 inline-block bg-green-500 text-white px-4 py-2 rounded">Add New Product</a>
      </Link>
      <ProductList />
    </div>
  );
}
