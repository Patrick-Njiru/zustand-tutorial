import { useCartStore } from "./store/cart-store"

const Cart = () => {
	// const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
	// 	cart: state.cart,
	// 	removeFromCart: state.removeFromCart,
	// 	clearCart: state.clearCart,
	// }))

		const cart = useCartStore((state) => state.cart)
		const removeFromCart = useCartStore((state) => state.removeFromCart)
		const clearCart = useCartStore((state) => state.clearCart)


	return (
		<div>
			<h2>Cart</h2>
			{cart.map((product) => (
				<div key={product.id}>
					<span>{product.name}</span>
					<button onClick={() => removeFromCart(product.id)}>X</button>
				</div>
			))}

			{cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
		</div>
	)
}

export default Cart
