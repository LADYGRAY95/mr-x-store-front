'use client';
import React, { useState } from 'react';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

interface PSNGiftCard {
  id: number;
  denomination: number;
  description: string;
  image: string;
  price: number;
}

// Sample data - replace with actual API call
const samplePSNCards: PSNGiftCard[] = [
  {
    id: 1,
    denomination: 10,
    description: "PSN Gift Card - Perfect for small PlayStation purchases",
    image: "/psn-10.png",
    price: 12.99
  },
  {
    id: 2,
    denomination: 25,
    description: "PSN Gift Card - Great for indie PlayStation games",
    image: "/psn-25.png",
    price: 29.99
  },
  {
    id: 3,
    denomination: 50,
    description: "PSN Gift Card - Perfect for AAA PlayStation games",
    image: "/psn-50.png",
    price: 59.99
  },
  {
    id: 4,
    denomination: 100,
    description: "PSN Gift Card - Ultimate PlayStation gaming bundle",
    image: "/psn-100.png",
    price: 119.99
  }
];

export default function PSNGiftCardPage() {
  const [psnGiftCards] = useState<PSNGiftCard[]>(samplePSNCards);

  const handleBuyNow = (card: PSNGiftCard) => {
    // Add to cart logic here
    console.log('Adding to cart:', card);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">PSN Gift Cards</h1>
          <p className="text-gray-400 text-lg">Browse our selection of PlayStation Network gift cards for all your gaming needs.</p>
        </div>

        {psnGiftCards.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No PSN gift cards available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {psnGiftCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300 group shadow-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">${card.denomination}</div>
                    <div className="text-sm text-blue-100">PSN Gift Card</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    ${card.denomination} PSN Card
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
            <h2 className="text-2xl font-bold text-primary mb-4">Why Choose PSN Gift Cards?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">PlayStation Store</h3>
                <p className="text-sm">Access thousands of games, DLC, and PlayStation content</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Instant Delivery</h3>
                <p className="text-sm">Get your PSN gift card codes instantly after purchase</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">All Platforms</h3>
                <p className="text-sm">Works on PS4, PS5, and PlayStation portable devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}