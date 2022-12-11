import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { cardclick } from "./actions";
import { useDispatch } from "react-redux";
import Layout from "./pages/Layout";
import Info from "./pages/Info";

function App() {
  const card = useSelector((state) => state.addtocard);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/info" element={<Info />} />
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
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
