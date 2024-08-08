import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import './Banner.css'
import { Modal, Button } from "react-bootstrap";
import AboutUs from "./AboutUs";
const Banner = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <section className="bg-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="display-4 mb-3">Thông Tin Website Group 5</h2>
            <p className="lead mb-4 text-truncate">
              Website cung cấp nhiều laptop với giá cực kì ưu đãi, chi nhánh
              trải dài từ tp Hồ Chí Minh ra tới Hà Nội, và có rất nhiều chương
              trình khuyến mãi cho học sinh, sinh viên.
            </p>
            <Button onClick={handleShow} className="btn btn-primary d-flex align-items-center">
              <span className="me-2">Đọc Thêm Thông Tin Website</span>
              <FaArrowRight />
            </Button>
          </div>
          <div className="col-md-6">
            <img
              src="/image/product/banner.avif"
              alt="Hình ảnh máy tính"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông Tin Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AboutUs />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Banner;
