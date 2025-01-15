import { Fragment } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "/images/shoes-1.jpg",        
        price: "Rp 1.000.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga commodi et deleniti qui, voluptate dicta doloribus, praesentium eaque beatae eligendi aliquid similique expedita ut vero odit quod possimus illum.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        image: "/images/shoes-1.jpg",
        price: "Rp 500.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]

const email = localStorage.getItem('email');

const ProductPages = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">            
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price}/>
                    </CardProduct> 
                ))}                                
            </div> 
        </Fragment>       
    )
}

export default ProductPages