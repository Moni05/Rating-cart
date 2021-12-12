import ProductCards from "./ProductCards";

export default function ProductListing(props){

    let { product, addCart, cart} = props;




    return(
        <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {product.map((product)=>(
                      <ProductCards key={product.id} product={product} addCart={addCart} cart={cart}/>
                    ))}
                </div>
            </div>
        </section>
        </>
    ) 
}