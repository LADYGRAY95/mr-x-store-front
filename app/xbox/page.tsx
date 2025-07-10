'use client';
import React, { useState } from 'react';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

interface XboxGiftCard {
  id: number;
  denomination: number;
  description: string;
  image: string;
  price: number;
}

const sampleXboxCards: XboxGiftCard[] = [
  {
    id: 1,
    denomination: 10,
    description: "Xbox Gift Card - Perfect for small Xbox purchases",
    image: "/xbox-10.png",
    price: 12.99
  },
  {
    id: 2,
    denomination: 25,
    description: "Xbox Gift Card - Great for indie Xbox games",
    image: "/xbox-25.png",
    price: 29.99
  },
  {
    id: 3,
    denomination: 50,
    description: "Xbox Gift Card - Perfect for AAA Xbox games",
    image: "/xbox-50.png",
    price: 59.99
  },
  {
    id: 4,
    denomination: 100,
    description: "Xbox Gift Card - Ultimate Xbox gaming bundle",
    image: "/xbox-100.png",
    price: 119.99
  }
];

export default function XboxGiftCardPage() {
  const [xboxGiftCards] = useState<XboxGiftCard[]>(sampleXboxCards);

  const handleBuyNow = (card: XboxGiftCard) => {
    console.log('Adding to cart:', card);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Xbox Gift Cards</h1>
          <p className="text-gray-400 text-lg">Browse our selection of Xbox gift cards for all your gaming needs.</p>
        </div>

        {xboxGiftCards.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No Xbox gift cards available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {xboxGiftCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300 group shadow-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">${card.denomination}</div>
                    <div className="text-sm text-green-100">Xbox Gift Card</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    ${card.denomination} Xbox Card
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
            <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Xbox Gift Cards?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Microsoft Store</h3>
                <p className="text-sm">Buy games, apps, movies, and subscriptions across Xbox and Windows</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Instant Delivery</h3>
                <p className="text-sm">Receive your Xbox code instantly after purchase</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Cross-Platform</h3>
                <p className="text-sm">Redeem on Xbox One, Series X|S, and Windows PCs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
