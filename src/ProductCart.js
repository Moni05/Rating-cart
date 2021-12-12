import React from "react";

export default function ProductCart(props){

    const { product, addCart, cart } = props;

    return(
        <>
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={cart.image} alt={cart.title} />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{cart.title}</h5>
                            {cart.price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {cart.addingToCart ?<div className="text-center"><button onClick={()=>addCart(product)} className="btn btn-outline-dark mt-auto" href="#">Remove from Cart</button></div>:<div className="text-center"><button onClick={()=>addCart(product)} className="btn btn-outline-dark mt-auto" href="#">Add to Cart</button></div>}
                </div>
            </div>
        </div>
        </>
    )
}