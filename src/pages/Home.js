import React from "react";
import Banner from "../components/home/Banner";
import Product from "../components/home/Product";

function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full -mt-14 xl:-mt-36 py-10">
        <Product />
      </div>
    </div>
  );
}

export default Home;
