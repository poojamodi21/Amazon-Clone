import Head from "next/head";
import Banner from "../Components/Banner";
import Feed from "../Components/Feed";
import Header from "../Components/Header";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner  />
        <Feed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) =>res.json()
  );
  return{
    props:{
      products
    },
  };
}