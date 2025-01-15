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

const ProductPages = () => {
    return (
        <div className="flex justify-center py-5">            
            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}/>
                </CardProduct> 
            ))}                                
        </div>        
    )
}

export default ProductPages