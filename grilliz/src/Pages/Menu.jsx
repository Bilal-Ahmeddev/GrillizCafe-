import React from "react";
import { useCart } from "../Context/CartContext"; // Import Cart Context

const menuItems = [
  { id: 1, name: "Espresso", price: 1500 , image: "https://media.istockphoto.com/id/664313320/photo/espresso-coffee-cup-with-beans-on-vintage-table.jpg?s=612x612&w=0&k=20&c=kaF8P4KuAlVhAm9zNcq5DxSimOv8w3yVQynS4dwPBHc=" },
  { id: 2, name: "Latte", price: 1200, image: "https://static.vecteezy.com/system/resources/thumbnails/023/979/901/small_2x/coffee-cup-with-latte-art-on-wooden-table-background-photo.jpeg" },
  { id: 3, name: "Cappuccino", price: 1500, image: "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=" },
  { id: 4, name: "Mocha", price: 1500 , image: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU=" },
  { id: 5, name: "Croissant", price:  1000 , image: "https://t4.ftcdn.net/jpg/03/66/13/57/360_F_366135713_iSnaXZVccWVn8xcqnpGnkQTrnwSWLtfu.jpg" },
  { id: 6, name: "Blueberry Muffin", price: 1300 , image: "https://www.shutterstock.com/image-photo/blueberry-muffins-blueberries-on-top-600nw-2492319609.jpg" },
  { id: 7, name: "Chocolate Cake", price: 2000, image: "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=" },
  { id: 8, name: "Iced Coffee", price: 1500, image: "https://media.istockphoto.com/id/1153796247/photo/iced-coffee-background.jpg?s=612x612&w=0&k=20&c=_1g6mcVyjsoJS93ez9BHDANU5HNIO09LQ3zFO1KbOG4=" },
];

export default function Menu() {
  const { addToCart, notifications } = useCart(); // Use Context

  return (
    <div className="container mx-auto px-4 py-10 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>

      {/* Notifications */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 mt-10 w-80">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-green-500 text-white text-center py-2 rounded mb-2 shadow-lg">
            {notification.message}
          </div>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-700">Rs {item.price}</p>
              <button
                className="mt-3 w-full bg-brown-600 text-white py-2 rounded-lg hover:bg-brown-700 transition"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
