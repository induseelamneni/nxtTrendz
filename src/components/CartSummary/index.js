// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="summary-details">
            <h1 className="heading">
              Order Total: <span className="heading total">Rs {total}/-</span>
            </h1>
            <p className="heading">{cartList.length}Items in Cart</p>
            <button type="button" className="checkout">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
