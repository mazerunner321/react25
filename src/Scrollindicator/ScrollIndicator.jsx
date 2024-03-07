import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  //-------------------------------------------------------------
  const [scrollPercent, setScrollPercent] = useState(0);

  const getProducts = async () => {
    try {
      setLoading(true);
      let res = await fetch(`https://dummyjson.com/products`);
      let data = await res.json();
      if (data?.products) setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.warn(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleScroll = () => {
    let scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = window.scrollY;
    let percentage = (scrolled / scrollHeight) * 100;
    setScrollPercent(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 mb-10">
        <h1 className="text-3xl tracking-wider text-center font-extrabold bg-teal-100 py-6">
          Scroll Indicator
        </h1>
        <div
          className="h-full bg-blue-500 transition-width duration-300"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>
      <div className="container mt-28">
        {products?.map((product, i) => (
          <h1
            className="font-semibold text-lg font-mono text-center mb-6"
            key={i}
          >
            {product.title}
          </h1>
        ))}
      </div>
    </>
  );
};

export default ScrollIndicator;
