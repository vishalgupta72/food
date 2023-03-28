// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import React, {useState} from 'react'

function App() {

  const[cart, setCart] = useState({burger: 0, fires: 0, pepsi: 0, coke: 0, price: 0});

  const updateCart = (item, count, price) =>{
    setCart((prevCart) =>({
      ...prevCart,
      [item]: count,
      price: prevCart.price + price,
    }));

  }

  const incrementItem = (itemName, price) => {
    setCart(prevState => ({
      ...prevState,
      [itemName]: prevState[itemName] + 1,
      price: prevState.price + price,
    }));
  };

  const decrementItem = (itemName, price) => {
    if (cart[itemName] > 0) {
    setCart(prevState => ({
      ...prevState,
      [itemName]: prevState[itemName] - 1,
      price: prevState.price - price,
    }));
  }
  };


  return (
    <>
      <Navbar cart={cart} incrementItem={incrementItem} decrementItem={decrementItem}/>
      <Card updateCart={updateCart}/>
    </>
  );
}

export default App;
