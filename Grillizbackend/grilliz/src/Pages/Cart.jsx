import React from "react";
import { useCart } from "../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-10 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty! Start adding delicious items.</p>
          <Link to="/menu" className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-yellow-400 transition">
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-700">Rs {item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition">
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: Rs {totalPrice}</h3>
            <button className="mt-3 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-green-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
