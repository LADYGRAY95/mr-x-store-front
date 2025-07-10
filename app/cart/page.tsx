'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  const addToCart = (item: string, price: number, image: string) => {
    const existingItem = cartItems.find((i) => i.name === item);
    if (existingItem) {
      const updatedCartItems = cartItems.map((i) =>
        i.name === item ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { name: item, quantity: 1, price, image }]);
    }
  };

  const removeFromCart = (item: string) => {
    const updatedCartItems = cartItems.filter((i) => i.name !== item);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (item: string) => {
    const updatedCartItems = cartItems.map((i) =>
      i.name === item ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item: string) => {
    const itemToUpdate = cartItems.find((i) => i.name === item);
    if (itemToUpdate) {
      if (itemToUpdate.quantity > 1) {
        const updatedCartItems = cartItems.map((i) =>
          i.name === item ? { ...i, quantity: i.quantity - 1 } : i
        );
        setCartItems(updatedCartItems);
      } else {
        removeFromCart(item);
      }
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCancel = () => {
    router.push('/');
  };

  const handleCheckout = () => {
    // Add checkout logic here
    console.log('Proceeding to checkout with items:', cartItems);
    // You might want to navigate to a checkout page
    // router.push('/checkout');
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <FaShoppingCart className="mr-4 text-primary text-2xl" />
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400 text-lg mb-4">Your cart is empty.</p>
                <button
                  onClick={() => router.push('/')}
                  className="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-800 shadow-md p-4 rounded-md flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-md" 
                        />
                      </div>
                      <div>
                        <span className="font-semibold text-white">{item.name}</span>
                        <p className="text-gray-400">Price: {item.price}dt</p>
                        <div className="flex items-center mt-2">
                          <button
                            className="text-red-500 hover:text-red-600 p-1"
                            onClick={() => decreaseQuantity(item.name)}
                          >
                            <FaMinus />
                          </button>
                          <span className="mx-2 bg-gray-300 text-gray-700 px-3 py-1 rounded-md">
                            {item.quantity}
                          </span>
                          <button
                            className="text-green-500 hover:text-green-600 p-1"
                            onClick={() => increaseQuantity(item.name)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-600 p-2"
                      onClick={() => removeFromCart(item.name)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="bg-gray-800 p-6 rounded-md h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{totalPrice.toFixed(2)}dt</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>{totalPrice.toFixed(2)}dt</span>
                </div>
              </div>
              <div className="space-y-2">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-primary text-white py-3 px-4 rounded hover:bg-secondary transition-colors"
                >
                  Proceed to Checkout
                </button>
                <button 
                  onClick={handleCancel}
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}