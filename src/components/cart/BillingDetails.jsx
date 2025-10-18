import React from "react";

const BillingDetails = ({data}) => {

    const totalPrice = data.reduce(
      (total, eachItem) => total + eachItem.price * eachItem.quantity,
      0
    );
    const shippingPrice = totalPrice * 0.2;
    const total=shippingPrice+totalPrice;

  return (
    <div className="shadow-md mt-[85px] p-[25px] flex-1 ml-[45px]">
      <div className="flex justify-between">
        <h4 className="font-medium text-[18px]">Subtotal:</h4>
        <h4 className="font-bold text-[18px]">${totalPrice}</h4>
      </div>

      <div className="flex justify-between my-[15px]">
        <h4 className="font-medium text-[18px]">Shipping:</h4>
        <h4 className="font-bold text-[18px]">${shippingPrice}</h4>
      </div>

      <hr />

      <div className="flex justify-between mt-[15px] mb-[10px]">
        <h4 className="font-medium text-[20px] text-gray-500">Total:</h4>
        <h4 className="font-bold text-[20px] text-gray-500">${total} USD</h4>
      </div>
      <p className="text-right font-bold">Including VAT</p>
      <button className="bg-indigo-500 w-full p-[8px] text-white rounded-[5px] cursor-pointer mt-[20px] font-bold">
        Check Out
      </button>
    </div>
  );
};

export default BillingDetails;
