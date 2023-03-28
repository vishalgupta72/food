import React, {useState} from 'react'


const Card = ({updateCart}) => {
    const[cart, setCart] = useState({burger: 0, fires: 0, pepsi: 0, coke: 0, price: 0});

    const addCart = (item, price) => {
        setCart((prevCart) => ({
          ...prevCart,
          [item]: prevCart[item] + 1,
          price: prevCart.price + price,

        }));
    
        updateCart(item, cart[item] + 1, price);
        // console.log(price)
      };

    const removeCart = (item, price) => {
        if (cart[item] > 0) {
          setCart((prevCart) => ({
            ...prevCart,
            [item]: prevCart[item] - 1,
            price: prevCart.price - price,
          }));
    
          updateCart(item, cart[item] - 1, price);
        }
      };

    //   console.log(cart);
    
  return (
    <>
        <div className='container -flex justify-content-center mt-3'>
            <div className='row offset-2'>
                <div className='col-md-3 mt-3'>
                    <div className="card shadow">
                        <img src="img/burger.jpeg" className="card-img-top" alt="burger"/>
                        <div className="card-body">
                            <h5 className="card-title">Hamburger</h5>
                            <p className="card-text">price: 200</p>
                            <p className="card-text">Total: {cart.burger}</p>
                            <button type="button" onClick={() => addCart("burger", 200)} className="btn btn-primary">+</button>
                            <button type="button" onClick={() => removeCart("burger", 200)} className="btn btn-danger m-2">-</button>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 mt-3'>
                    <div className="card shadow">
                        <img src="img/fries.jpeg" className="card-img-top" alt="fries"/>
                        <div className="card-body">
                            <h5 className="card-title">Fries</h5>
                            <p className="card-text">price: 100</p>
                            <p className="card-text">Total: {cart.fires}</p>
                            <button type="button" onClick={() => addCart("fires", 100)} className="btn btn-primary">+</button>
                            <button type="button" onClick={() => removeCart("fires", 100)} className="btn btn-danger m-2">-</button>
                        </div>
                    </div>
                </div>

                

                <div className='col-md-3 mt-3'>
                    <div className="card shadow">
                        <img src="img/pepsi.jpeg" className="card-img-top" alt="pepsi"/>
                        <div className="card-body">
                            <h5 className="card-title">Pepsi</h5>
                            <p className="card-text">price 50</p>
                            <p className="card-text">Total: {cart.pepsi}</p>
                            <button type="button" onClick={() => addCart("pepsi", 50)} className="btn btn-primary">+</button>
                            <button type="button" onClick={() => removeCart("pepsi", 50)} className="btn btn-danger m-2">-</button>
                        
                        </div>
                    </div>
                </div>

            </div>

            <div className='row offset-2'>
            <div className='col-md-3 mt-3 mb-3'>
                    <div className="card shadow">
                        <img src="img/coke.jpeg" className="card-img-top" alt="coke"/>
                        <div className="card-body">
                            <h5 className="card-title">Coke</h5>
                            <p className="card-text">price 50</p>
                            <p className="card-text">Total: {cart.coke}</p>
                            <button type="button" onClick={() => addCart("coke", 50)} className="btn btn-primary">+</button>
                            <button type="button" onClick={() => removeCart("coke", 50)} className="btn btn-danger m-2">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card