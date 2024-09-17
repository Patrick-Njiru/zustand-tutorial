import { useCartStore } from "./store/cart-store"
import { products } from "./products"

const ProductList = () => {
	const addToCart = useCartStore((state) => state.addToCart)

	return (
		<div className='products-page'>
			<h2>Products List</h2>
			{products?.map((product) => (
				<div key={product.id} className='product'>
					<span>
						{product.id}. &nbsp;
						{product.name}
					</span>
					<button onClick={() => addToCart(product)}>Add To Cart</button>
				</div>
			))}
		</div>
	)
}

export default ProductList
