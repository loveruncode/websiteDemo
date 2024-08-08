import React, { useState, useEffect } from "react";
import axios from "axios";

const Buynow = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5114/api/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.description}</p>
      <p>Số Tiền: {product.price} VND</p>
      <p>Số Lượng: {product.stockQuantity}</p>
      <img 
        src="/image/product/macbook.jpg" 
        alt={product.productName} 
        className="img-fluid" 
      />
      <button className="btn btn-success mt-1">Thanh Toán</button>
    </div>
  );
};

export default Buynow;
