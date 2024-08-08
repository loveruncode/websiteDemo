import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-1">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} PSD Company. Cung Cấp Thiết Bị Laptop.</p>
        <p className="mb-0">Theo Dõi Chúng Tôi Trên
          <a href="/fb" className="text-white ms-2">Facebook</a>, 
          <a href="/twitter" className="text-white ms-2">X</a>, 
          <a href="/ins" className="text-white ms-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
