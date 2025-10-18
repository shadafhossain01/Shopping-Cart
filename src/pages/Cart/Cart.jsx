import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cart/CartProduct";
import BillingDetails from "../../components/cart/BillingDetails";

const Cart = () => {

  const data=useSelector(state=>state.cart)

  return data.length>0? (<div className="flex justify-between">
<CartProduct data={data}/>
<BillingDetails data={data}/>
  </div>):<p className="text-center font-bold  text-[29px] my-[50px] italic">No Produts Added to Cart</p>;
};

export default Cart;
