import React, {useContext} from 'react'
import { CartTable } from "./cart-table";
import {CartContext} from '../../helpers/CartProvider';

export default function Cart() {
  const {
    cartTotal,
    cartItems,
    removeFromCart,
    updateQuantity
  } = useContext(CartContext);

    return (
        <div>
            <CartTable 
              cartItems={cartItems} 
              cartTotal={cartTotal}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
        </div>
    )
}
