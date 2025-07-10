'use client';
import React, { useState } from 'react';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';

interface SteamGiftCard {
  id: number;
  denomination: number;
  description: string;
  image: string;
  price: number;
}

// Sample data - replace with actual API call
const sampleSteamCards: SteamGiftCard[] = [
  {
    id: 1,
    denomination: 10,
    description: "Steam Gift Card - Perfect for small purchases",
    image: "/steam-10.png",
    price: 12.99
  },
  {
    id: 2,
    denomination: 25,
    description: "Steam Gift Card - Great for indie games",
    image: "/steam-25.png",
    price: 29.99
  },
  {
    id: 3,
    denomination: 50,
    description: "Steam Gift Card - Perfect for AAA games",
    image: "/steam-50.png",
    price: 59.99
  },
  {
    id: 4,
    denomination: 100,
    description: "Steam Gift Card - Ultimate gaming bundle",
    image: "/steam-100.png",
    price: 119.99
  }
];

export default function SteamGiftCardPage() {
  const [steamGiftCards] = useState<SteamGiftCard[]>(sampleSteamCards);

  const handleBuyNow = (card: SteamGiftCard) => {
    // Add to cart logic here
    console.log('Adding to cart:', card);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Steam Gift Cards</h1>
          <p className="text-gray-400 text-lg">Browse our selection of Steam gift cards and power up your gaming library.</p>
        </div>

        {steamGiftCards.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No Steam gift cards available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {steamGiftCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300 group shadow-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">${card.denomination}</div>
                    <div className="text-sm text-blue-100">Steam Gift Card</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    ${card.denomination} Steam Card
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {card.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-right">
                      <span className="text-gray-500 text-sm">Price:</span>
                      <div className="text-2xl font-bold text-primary">
                        ${card.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleBuyNow(card)}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Steam Gift Cards?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Instant Delivery</h3>
                <p className="text-sm">Get your Steam gift card codes instantly after purchase</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Secure Payment</h3>
                <p className="text-sm">All transactions are protected with industry-standard encryption</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-sm">Our customer service team is always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}