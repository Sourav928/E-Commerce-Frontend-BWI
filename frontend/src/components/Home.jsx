import React from "react";
import Header from "./Header";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "130px" }}>
        <Products />
      </div>
    </>
  );
};

export default Home;
