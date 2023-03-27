import React, { useEffect, useState } from "react"
import DisplayData from "../DisplayData/DisplayData"

const Shop = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className="my-5 flex justify-between container mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <DisplayData key={product} product={product}></DisplayData>
        ))}
      </div>
      <div>
        <h1 className="font-semibold text-xl md:mr-20">Order Summary</h1>
      </div>
    </div>
  )
}

export default Shop
