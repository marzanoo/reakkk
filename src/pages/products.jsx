import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const ProductPages = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                inventore deleniti quos fuga in numquam ipsum aspernatur, 
                saepe similique quas odio beatae voluptates autem voluptatibus.
                Quod corporis quidem sapiente voluptates.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000"/>
            </CardProduct>            
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                inventore deleniti quos fuga in numquam ipsum aspernatur, 
                saepe similique quas odio beatae voluptates autem voluptatibus.
                Quod corporis quidem sapiente voluptates.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000"/>
            </CardProduct>            
        </div>        
    )
}

export default ProductPages