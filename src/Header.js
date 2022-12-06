import React, { useEffect } from "react";
import "./Header.css";
import {ShoppingBagIcon} from "@heroicons/react/24/solid"
import { useSelector } from "react-redux";
import { cardclick, addtocard } from "./actions";
import { useDispatch } from "react-redux";

function Header() {
  const card = useSelector((state) => state.addtocard);
  const dispatch = useDispatch();
 
  return (
    <div className="header">
      
        <input type="text" placeholder="Search.."></input>
        <button>Search</button>
   
      <div className="card" onClick={() => dispatch(cardclick())}>
        <ShoppingBagIcon className="bagicon" />{" "}
        <div className="quantity">{card.length}</div>
      </div>
    </div>
  );
}

export default Header;
