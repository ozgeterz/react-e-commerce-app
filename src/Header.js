import React from "react";
import "./Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import {ShoppingBagIcon} from "@heroicons/react/24/solid"
import { useSelector } from "react-redux";
import { cardclick } from "./actions";
import { useDispatch } from "react-redux";


function Header() {
  const card = useSelector((state) => state.addtocard);
  const dispatch = useDispatch();

 
  return (
    <div className="header">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      <div className="search">
        <input type="text" placeholder="Search.."></input>
        <button>Search</button>
   </div>
      <div className="card" onClick={() => dispatch(cardclick())}>
        <ShoppingBagIcon className="bagicon" />{" "}
        <div className="quantity">{card.length}</div>
      </div>
    </div>
  );

  
}

export default Header;
