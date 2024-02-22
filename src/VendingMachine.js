import React from "react";
import { Link } from "react-router-dom"
import "./VendingMachine.css"

const VendingMachine = () => {

    return (
        <>
            <p className="title">Hello, I'm a Vending Machine. What would you like to eat?</p>
            <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoSJl8aowt9A4H5R54EugPj0qAh4012Bh9s3mtSi9TQQP7LbFCDu_QGwvuZK2H7_kUgLwvMDhmucVpkPn8CwDZC3atoLfRDDWQWzqPp09PPVU1rRtpdVSyfOqOwSt8V4C8_fpb16sHFA&usqp=CAc"
                alt="vending machine" />
            <p>
                <Link className="item" to="/cookies">Cookies</Link>
            </p>
            <p>
                <Link className="item" to="/coke">Coke</Link>
            </p>
            <p>
                <Link className="item" to="/chips">Chips</Link>
            </p>
        </>
    )
}

export default VendingMachine