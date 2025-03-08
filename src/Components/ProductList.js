import React from "react";
import { FaStar } from "react-icons/fa";

function ProductList() {
  const products = [
    {
      name: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      image: "art1.jpg",
      rating: 5,
    },
    {
      name: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      image: "art2.jpg",
      rating: 5,
    },
    {
      name: "Abstract Art Canvas Print",
      price: "$159.99",
      image: "art3.jpg",
      rating: 4.5,
    },
    {
      name: "Minimalist Blue Hands Art",
      price: "$249.99",
      image: "art4.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">
            {product.price}
            <span className="star">
              {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
