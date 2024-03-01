import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=50&skip=${
          count === 0 ? 0 : count * 50
        }`
      );
      const data = await res.json();
      if (data && data.products) {
        setProducts((prev) => [...prev, ...data.products]);
      }
      if (data.skip === data.total) setDisabled(true);
      setLoading(false);
    } catch (error) {
      console.warn(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [count]);

  if (loading)
    return (
      <div className="text-center text-3xl font-mono mt-6">Loading....</div>
    );

  return (
    <main className="m-4">
      {/* Sorting */}
      <section className="flex justify-center gap-4 mb-5">
        <button
          onClick={() => {
            let sortedArr = [...products];
            sortedArr.sort((a, b) => a.price - b.price);
            setProducts(sortedArr);
          }}
          className="bg-gray-400 py-1 px-3 rounded-lg hover:bg-gray-300 text-sm font-semibold font-mono"
        >
          Asc
        </button>
        <button
          onClick={() => {
            let sortedArr = [...products];
            sortedArr.sort((a, b) => b.price - a.price);
            setProducts(sortedArr);
          }}
          className="bg-gray-400 py-1 px-3 rounded-lg hover:bg-gray-300 text-sm font-semibold font-mono"
        >
          Desc
        </button>
      </section>

      {/* Displaying */}
      <section className="grid grid-cols-5 gap-4">
        {products?.map((prod, i) => (
          <div
            className="border border-black/35 rounded-md text-center p-4"
            key={i}
          >
            <h1 className="font-bold text-lg font-mono mb-3">{prod.title}</h1>
            <div className="w-[80%] m-auto h-[200px] mb-2">
              <img
                className="object-contain w-full h-full"
                src={prod.images[0]}
                alt="Image of the product"
              />
            </div>
            <p className="text-sm font-semibold">${prod.price}</p>
          </div>
        ))}
      </section>

      {/* Load more Button */}
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-teal-400 py-2 px-6 rounded-lg hover:bg-teal-300 text-sm font-bold font-mono"
          disabled={disabled}
        >
          {disabled ? "You have reached the End" : "Load More Products"}
        </button>
      </div>
    </main>
  );
};

export default LoadMore;
