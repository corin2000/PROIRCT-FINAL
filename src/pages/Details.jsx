





// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import AddToCartButton from "../components/AddToCartButton/AddToCartButton";

// const Details = () => {
// 	const { productId } = useParams();
// 	const [productDetails, setProductDetails] = useState(null);

// 	useEffect(() => {
// 		const fetchProducts = async () => {
// 			const response = await fetch(
// 				""
// 			);
// 			const products = await response.json();
// 			setProductDetails(products.find((product) => product.id === productId));
// 		};

// 		fetchProducts();
// 	}, []);

// 	return productDetails ? (
// 		<div className="flex">
// 			<div>
// 				<img src={productDetails.imageURL} alt={productDetails.name} />
// 			</div>
// 			<div>
// 				<h1>{productDetails.name}</h1>
// 				<p>{productDetails.description}</p>
// 				<p>{productDetails.price}</p>
// 				<p>{productDetails.stockQty}</p>
// 				<AddToCartButton id={productDetails.id} />
// 			</div>
// 		</div>
// 	) : (
// 		<div>Loading ...</div>
// 	);
// };

// export default Details;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('id');
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Emulează o cerere către API sau furnizează datele direct
    const fetchData = async () => {
      try {
       
        const response = await fetch(`https://657eb3973e3f5b189463fd66.mockapi.io/products/${productname}`);
        const data = await response.json();

        setProductDetails(data);
      } catch (error) {
        console.error('Eroare la obținerea detaliilor produsului:', error);
      }
    };

    if (productname) {
      fetchData();
    }
  }, [productId]);

  return (
    <div>
		console.log()
      {productDetails ? (
        <div>
          <h1>{productDetails.name}</h1>
          <p>{productDetails.description}</p>
          {/* Alte detalii produs */}
        </div>
      ) : (
        <p>Se încarcă...</p>
      )}
    </div>
  );
};

export default Details;