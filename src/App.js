import logo from './logo.svg';
import Menu from './modules/Menu'
import BgVideo from './modules/Bg-video';
import MiddleItems from './modules/Footer'
import './App.css';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Retailers from "./pages/Retailers";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="faq" element={<Faq />} />
          <Route path="retailers" element={<Retailers />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
