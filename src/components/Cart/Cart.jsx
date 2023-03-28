import React from "react"

const Cart = ({ cart }) => {
  // console.log(cart)
  // const {cart} = props;

  let totalPrice = 0
  let totalShipping = 0

  for (const product of cart) {
    totalPrice = totalPrice + product.price
    totalShipping = totalShipping + product.shipping
  }

  const tax = (totalPrice * 5) / 100

  const grandTotal = totalPrice + totalShipping + tax

  return (
    <div className="">
      <h1 className="font-bold text-2xl  text-center">Order Summary</h1>
      <div className="space-y-2 pt-2">
        <p>Selected Items : {cart.length}</p>
        <p>Total Price : ${totalPrice}</p>
        <p>Total Shipping Charge : ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p className="font-semibold text-lg pb-2">
          Grand Total : ${grandTotal.toFixed(2)}
        </p>
      </div>
      <div className="md:flex">
        <button className="btn btn-info mr-2">
          Clear Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <button className="btn btn-success">
          Review Order{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Cart
