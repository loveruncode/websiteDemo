import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainCategory.css";
import { BsBasket2, BsCart4 } from "react-icons/bs";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Buynow from "./Buynow";
const MainCategory = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5114/api/product");
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (productId) => {
    setSelectedProductId(productId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProductId(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4 col-12" key={product.productId}>
            <div className="card custom-card">
              <h5 className="card-header text-truncate">
                {product.productName}
              </h5>
              <div className="card-body">
                <img
                  src="/image/product/macbook.jpg"
                  className="img-fluid"
                  alt="hinh san pham"
                />
                <p className="card-text text-truncate">{product.description}</p>
                <p className="card-price">
                  <span className="badge bg-dark me-2">Giá Bán :</span>
                  <span className="text-danger fw-bold text-truncate">
                    <br />
                    {product.price} VND
                  </span>
                </p>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => handleBuyNow(product.productId)}
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <BsBasket2 className="me-2" /> Mua Ngay
                  </button>
                  <div className="ms-auto d-flex align-items-center">
                    <BsCart4 className="me-2" />
                    <span className="text-danger">{product.stockQuantity}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Mua Sản Phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProductId && <Buynow productId={selectedProductId} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MainCategory;
