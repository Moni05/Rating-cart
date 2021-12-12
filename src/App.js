import Navigation from "./Navigation";
import Header from "./Header";
import product from "./product";
import ProductListing from "./ProductListing";
import Footer from "./Footer";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);


  const addCart = (product)=>{

    setCart((items)=>{
      const itemsExist = items.find((x)=> x.id=== product.id);

      if(itemsExist){
        return items.filter((i)=>
          i.id !== product.id
        );
      }else{
        return [...cart, {...product}]
      }
    })
  };

  return (
    <>
    <Navigation cart={cart}/>
    <Header />
    <ProductListing product={product} addCart={addCart} cart={cart} />
    <Footer />
    </>
  );
}

export default App;