
import React, { useState, useEffect } from "react";
import ProductCard from "../components/Products/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);
    //o pereche de obiect si functia  cu care le setez-nula cande le incarc ;
  // use effect ins ca apare un side effect cand se incarca pg ;
 
 
  const [filteredProducts, setFilteredProducts] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://657eb3973e3f5b189463fd66.mockapi.io/products"
      );
      const products = await response.json();
      setProducts(products);
      setFilteredProducts(products);
      // Setam un state cu ce am obtinut in effect
      // setFilteredProducts(products);
    };

    fetchProducts();
  }, []);

  const onChangeFilterPrice = (e, startPrice, endPrice) => {
    if (e.target.checked) {
      filterProductsByPrice(startPrice, endPrice);
    } else {
      setFilteredProducts(products);
    }
  };

  const filterProductsByPrice = (startPrice, endPrice) => {
    const filteredProductsByPrice = products.filter(
      (product) => product.price >= startPrice && product.price <= endPrice
    );
    setFilteredProducts(filteredProductsByPrice);
  };

  return filteredProducts ? (
    // <ProductsConainter products={products} />
    <div>
      <div className="flex gap-4 p-5 text-center text-2xl">
        <div>
          <input
            className="h-6 w-6"
            type="checkbox"
            id="filter1"
            onChange={(e) => onChangeFilterPrice(e, 0, 499)}
          />
          <label htmlFor="filter1"> 0 - 499 lei</label>
        </div>
        <div>
          <input
            className="h-6 w-6"
            type="checkbox"
            id="filter2"
            onChange={(e) => onChangeFilterPrice(e, 500, Infinity)}
          />
          <label htmlFor="filter2"> peste 500 lei</label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Home;