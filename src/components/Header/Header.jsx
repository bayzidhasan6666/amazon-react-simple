import React from "react"
import logo from "../../images/logo.svg"

const Header = () => {
  return (
    <nav className="p-4 h-20 bg-neutral text-white md:flex justify-between px-10">
      <img className="" src={logo} alt="" />
      <div className="flex gap-5 p-4">
        <a className="hover:text-orange-500 transition-all" href="/shop">
          Shop
        </a>
        <a className="hover:text-orange-500 transition-all" href="/order">
          Orders
        </a>
        <a className="hover:text-orange-500 transition-all" href="/inventory">
          Inventory
        </a>
        <a className="text-orange-400 hover:text-white transition-all" href="/login">
          Login
        </a>
      </div>
    </nav>
  )
}

export default Header
