import React from "react"

const DisplayData = (props) => {
  console.log(props.product)
  const { seller, price, ratings, img, name } = props.product

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img ? img : "No Image"} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name ? name : "No Name"}</h2>
        <p className="mb-5">Price : ${price ? price : "No Price"}</p>
        <p>Manufacturer : {seller ? seller : "No Info"}</p>
        <p>Rating : {ratings ? ratings : "No ratings"} Stars</p>
        <div className="items-center gap-3 flex">
          <button className="btn btn-error">Add To Cart</button>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DisplayData
