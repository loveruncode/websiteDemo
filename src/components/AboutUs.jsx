import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us-container d-flex">
      <div className="about-us-text">
        <h1>Giới Thiệu Về Website</h1>
        <p>
          Chào mừng bạn đến với website bán laptop của chúng tôi. Chúng tôi tự hào là một trong những nhà cung cấp laptop hàng đầu tại Việt Nam, với chi nhánh trải dài từ TP. Hồ Chí Minh đến Hà Nội.
        </p>
        <p>
          Tại đây, bạn sẽ tìm thấy một loạt các mẫu laptop từ nhiều thương hiệu nổi tiếng như Apple, Dell, HP, Lenovo, và nhiều hơn nữa. Chúng tôi cam kết cung cấp sản phẩm chính hãng với giá cả cạnh tranh nhất.
        </p>
        <p>
          Ngoài ra, chúng tôi còn có nhiều chương trình khuyến mãi hấp dẫn dành cho học sinh, sinh viên và khách hàng thân thiết. Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng tư vấn và giúp bạn chọn lựa sản phẩm phù hợp nhất.
        </p>
      </div>
      <div className="about-us-image">
        <img 
          src="/anp.jpg" 
          alt="Laptop Store" 
          className="img-fluid"
         
        />
      </div>
    </div>
  );
};

export default AboutUs;
