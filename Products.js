import React from 'react'
import { Link } from 'react-router-dom'
import productsData from './productsData'

// • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
/**
 * Challenge:
 * 
 * 1. Create a ProductDetail component
 * 2. Link each product name to a detail page of that product 
 *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
 * 3. Clicking the product name should replace the product list page with
 *    the detail page of that component.
 * 
 * Hint: Check out the `useParams` lesson if you need a refresher.
 */
function Products() {
	const products = productsData.map(prod => (
		<div key={prod.id}>
			<Link to={`/products/${prod.id}`}>
				<h3>{prod.name}</h3>
			</Link>
			<p>Price: ${prod.price}</p>
			<hr />
		</div>
	))
	return (
		<div className='product__card'>
			<h1>Products Page</h1>
			{products}
		</div>
	)
}
export default Products