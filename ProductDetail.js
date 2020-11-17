import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from './productsData'

function ProductDetail() {
    const { id } = useParams()
    const showProduct = productsData.find(pro => pro.id === Number(id));
    console.log(showProduct);

    return (
        <div className='product__detail'>
            <h1>Product Detail</h1>
            <div>
                <p>Product detail</p>
                <h3>{showProduct.name}</h3>
                <p>Price: ${showProduct.price}</p>
                <p>{showProduct.description}</p>
            </div>
        </div>
    )
}
export default ProductDetail