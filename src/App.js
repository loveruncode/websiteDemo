
import Navbar from "./components/Nav";
import DeviceLinks from "./components/DeviceLinks";
import SideCategory from "./components/SideCategory";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <DeviceLinks />
      <SideCategory />
      <Banner />
      <Footer />
      
    </div>
  );
}

export default App;
