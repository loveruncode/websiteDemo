import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DeviceLinks.css";
import {
  BsLaptop,
  BsDisplay,
  BsPhone,
  BsController,
  BsDisplayportFill,
} from "react-icons/bs";

const MySection = () => (
  <section className="bg-light text-dark p-1 text-center mt-2">
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
        <a href="/laptop" className="device-link mb-2 mb-md-0 ">
          <BsLaptop className="icon-size" /> Laptop
        </a>
        <span className="separator d-none d-md-inline"></span>
        <a href="/pc" className="device-link mb-2 mb-md-0">
          <BsDisplay className="icon-size" /> PC
        </a>
        <span className="separator d-none d-md-inline"></span>
        <a href="/dien-thoai" className="device-link mb-2 mb-md-0">
          <BsPhone className="icon-size" /> Điện Thoại
        </a>
        <span className="separator d-none d-md-inline"></span>
        <a href="/xbox" className="device-link mb-2 mb-md-0">
          <BsController className="icon-size" /> Xbox
        </a>
        <span className="separator d-none d-md-inline"></span>
        <a href="/thiet-bi-khac" className="device-link mb-2 mb-md-0">
          <BsDisplayportFill className="icon-size" /> Thiết Bị Khác
        </a>
      </div>
    </div>
    <hr />
  </section>
);

export default MySection;
