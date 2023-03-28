import React, { useEffect, useState } from "react"
import { addToDb, getShoppingCart } from "../../utilities/fakedb"
import Cart from "../Cart/Cart"
import DisplayData from "../DisplayData/DisplayData"

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    const storedCart = getShoppingCart()
    const savedCart = []
    // console.log('products',products);
    // step-1: get id
    for (const id in storedCart) {
      // step-2: get the product by using id
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id)
      console.log(addedProduct)
      if (addedProduct) {
        // step-3 : add quantity
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        // step-4: add the added product to the saved cart
        savedCart.push(addedProduct)
      }
    }
// step-5: set the cart
    setCart(savedCart)
  }, [products])

  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product]
    setCart(newCart)
    addToDb(product.id)
  }

  return (
    <div className="my-5 md:flex justify-between container mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <DisplayData
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></DisplayData>
        ))}
      </div>
      <div className="sticky top-5 space-y-2 h-fit py-10 font-semibold bg-orange-300 lg:m-5 p-5 rounded-lg">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
