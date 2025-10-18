import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeCart } from "../../redux/features/cart/cartSlice";

const CartProduct = ({data}) => {
    const dispath=useDispatch()
    const handleIncreaseQuantity = (id) => {
    dispath(increaseQuantity(id))
    };
    const handleDiscreaseQuantity=(item)=>{
        if(item.quantity>1){
            dispath(decreaseQuantity(item.id));
        }
        else{
            dispath(removeCart(item.id))
        }
    }

  return (
    <div className=" basis-4xl ">
      <h2 className="mb-[15px] font-bold text-indigo-600 mt-[25px] text-[27px]">
        Cart Details
      </h2>
      {data.map((item) => (
        <div
          className="flex items-center  justify-between shadow-md mb-[20px] p-[10px]"
          key={item.id}
        >
          <div className="flex gap-[20px]">
            <img
              src={item.image}
              className="w-[250px] h-[150px] object-cover rounded-[5px]"
            />
            <div>
              <h3 className="font-bold mb-[7px] text-[18px]">{item.name}</h3>
              <h4 className="font-medium mb-[7px]">Price:${item.price}</h4>
              <h4 className="font-medium mb-[7px]">Category:{item.category}</h4>
            </div>
          </div>
          <div>
            <div>
              <button
                className="btn"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </button>
              <button className="btn">{item.quantity}</button>
              <button
                className="btn"
                onClick={() => handleDiscreaseQuantity(item)}
              >
                -
              </button>
            </div>
            <div className="flex items-center gap-4 mt-[15px]">
              <h3 className="font-bold text-[18px]">
                ${item.price * item.quantity}
              </h3>
              <ImCross className="text-red-700 cursor-pointer" onClick={()=>dispath(removeCart(item.id))} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
