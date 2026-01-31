import { useState } from "react";
import "./App.css";

function App() {
  // Products array with public folder images
  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 3000,
      image: "/images/image1.jpeg",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      image: "/images/image2.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      price: 70000,
      image: "/images/image3.png",
    },
    {
      id: 4,
      name: "hoodie",
      price: 1500,
      image: "/images/image4.webp",
    },
    {
      id: 5,
      name: "Perfume",
      price: 3500,
      image: "/images/image5.webp",
    },
    {
      id: 6,
      name: "watch",
      price: 2000,
      image: "/images/image6.jpg",
    },
    {
      id: 7,
      name: "bracelert",
      price: 600,
      image: "/images/image7.webp",
    },
    {
      id: 8,
      name: "bracelert",
      price: 600,
      image: "/images/image7.webp",
    },
  ];

  // Cart state: { productId: quantity }
  const [cart, setCart] = useState({});

  const addToCart = (id) => setCart({ ...cart, [id]: 1 });

  const increase = (id) => setCart({ ...cart, [id]: cart[id] + 1 });

  const decrease = (id) => {
    if (cart[id] > 1) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    } else {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    }
  };

  const totalPrice = (id) => {
    const product = products.find((p) => p.id === id);
    return product.price * cart[id];
  };

  const cartTotal = Object.keys(cart).reduce(
    (sum, id) => sum + totalPrice(Number(id)),
    0
  );

  return (
    <div className="container">
      <h1>Cart Page</h1>

      <div className="cart-summary">
        <h3>Total Cart: Rs {cartTotal}</h3>
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: Rs {product.price}</p>

            {cart[product.id] ? (
              <>
                <div className="quantity-control">
                  <button onClick={() => decrease(product.id)}>-</button>
                  <span>{cart[product.id]}</span>
                  <button onClick={() => increase(product.id)}>+</button>
                </div>
                <h4>Total: Rs {totalPrice(product.id)}</h4>
              </>
            ) : (
              <button className="add-btn" onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
