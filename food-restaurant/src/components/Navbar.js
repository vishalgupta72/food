import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  let totalPrice = props.cart.burger + props.cart.fires + props.cart.pepsi + props.cart.coke;
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a href className="nav-link active fw-bold"><i className="fa-solid fa-utensils"></i> Food's Restaurant</a>
                    </li>
                </ul>


                <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-cart-shopping"></i>{totalPrice}
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Order Summary</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div className="modal-body d-flex justify-content-between">
                        <p>Burger:</p>
                        <p>{props.cart.burger}</p>
                        <button type="button" onClick={() => props.incrementItem('burger', 200)} className="btn btn-primary" style={{height: '35px', width: '60px'}}>+</button>
                        <button type="button" onClick={() => props.decrementItem('burger', 200)} className="btn btn-danger" style={{height: '35px', width: '60px'}}>-</button>
                      </div>

                      <div className="modal-body d-flex justify-content-between">
                        <p>Fries:</p>
                        <p>{props.cart.fires}</p>
                        <button type="button" onClick={() => props.incrementItem('fires', 100)} className="btn btn-primary" style={{height: '35px', width: '60px'}}>+</button>
                        <button type="button" onClick={() => props.decrementItem('fires', 100)} className="btn btn-danger" style={{height: '35px', width: '60px'}}>-</button>
                      </div>


                      <div className="modal-body d-flex justify-content-between">
                        <p>Pepsi:</p>
                        <p>{props.cart.pepsi}</p>
                        <button type="button" onClick={() => props.incrementItem('pepsi', 50)} className="btn btn-primary" style={{height: '35px', width: '60px'}}>+</button>
                        <button type="button" onClick={() => props.decrementItem('pepsi', 50)} className="btn btn-danger" style={{height: '35px', width: '60px'}}>-</button>
                      
                      </div>

                      <div className="modal-body d-flex justify-content-between">
                        <p>Coke:</p>
                        <p>{props.cart.coke}</p>
                        <button type="button" onClick={() => props.incrementItem('coke', 50)} className="btn btn-primary" style={{height: '35px', width: '60px'}}>+</button>
                        <button type="button" onClick={() => props.decrementItem('coke', 50)} className="btn btn-danger" style={{height: '35px', width: '60px'}}>-</button>
                      </div>

                      <div className="modal-body ">
                        <p>Coke:</p>
                        <p>Total(INR): {props.cart.price}</p>
                       </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button to="Thank.js" type="button" className="btn btn-primary">Save and Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>


      
                </div>
            </div>
            </nav>
            
    </div>
  )
}

export default Navbar;