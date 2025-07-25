import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>

                <hr />
                {all_product.map((e) => {
                    if (CartItems[e.id] > 0) {
                        return
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='cartion-product-icon' />
                            <p>{e.image}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                            <p>${e.new_price*CartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                    }
                    return null
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtatal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter iy here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems