import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCategory from "./MainCategory";
import { BsTv } from "react-icons/bs";
const SideCategory = () => {
  return (
    <section className="bg-light text-dark p-5 custom-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <BsTv className="me-1"/> Danh Mục Sản Phẩm Laptop
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body ">
                    <a href="/lap-top-game-ming" className="d-block mb-3">
                      LapTop Gaming  
                    </a>
                    <a href="/lap-top-game-ming" className="d-block mb-3">
                      LapTop Gaming
                    </a>
                    <a href="/lap-top-game-ming" className="d-block mb-3">
                      LapTop Gaming
                    </a>
                  </div>
                </div>
              </div>
              {/* Additional accordion items can be added here */}
            </div>
          </div>
          

          <div className="col-md-8">
            <MainCategory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideCategory;
