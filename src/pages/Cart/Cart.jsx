import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cart/CartProduct";
import BillingDetails from "../../components/cart/BillingDetails";

const Cart = () => {

  const data=useSelector(state=>state.cart)

  return <div className="flex justify-between">
<CartProduct data={data}/>
<BillingDetails data={data}/>
  </div>;
};

export default Cart;
