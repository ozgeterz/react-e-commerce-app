import "../App.css";
import { useEffect, useState } from "react";
import Products from "../Products";
import Card from "../Card";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [items, setitems] = useState([]);
  const [carditems, setcarditems] = useState([]);

  let selectcard = useSelector((state) => state.cardclick);
  let card = useSelector((state) => state.addtocard);

  useEffect(() => {
   
   
    const getdata = async () => {
      const data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
      const result = await data.json();
      setitems(result);
    };
    getdata();
    setcarditems(card);
  }, [card, carditems]);
  return (

    <div >
      {selectcard ? (
        carditems.length > 0 ? (
          carditems.map((item) => (
            <Card
              id={item.id}
              mkey={item.id}
              imagesrc={item.imagesrc}
              Product={item.Product}
              Price={item.Price}
            />
          ))
        ) : (
          <h1 className="emptycard">NO ANY ITEM IN CARD</h1>
        )
      ) : (
        <div className="products">
          {items.map((item) => (
            <Products
              id={uuidv4()}
              key={item.id}
              imagesrc={item.image_link}
              Product={item.title}
              Price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;