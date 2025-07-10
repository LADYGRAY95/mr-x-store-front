'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

interface PSPlusSubscription {
  id: number;
  email: string;
  plan: string;
  expirationDate: string;
}

const PSPlusSubscriptionsSection: React.FC = () => {
  const [psPlusSubscriptions, setPSPlusSubscriptions] = useState<PSPlusSubscription[]>([]);

  useEffect(() => {
    const fetchPSPlusSubscriptions = async () => {
      try {
        const response = await axios.get('/api/ps-plus-subscriptions');
        setPSPlusSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching PS Plus subscriptions:', error);
      }
    };

    fetchPSPlusSubscriptions();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">PlayStation Plus Subscriptions</h1>
          <p className="text-gray-400 text-lg">Manage your PlayStation Plus subscriptions.</p>
        </div>

        {psPlusSubscriptions.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No PlayStation Plus subscriptions available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {psPlusSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300 group shadow-xl overflow-hidden p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-2 break-words">{subscription.email}</h3>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 mb-1">
                  Plan: {subscription.plan}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 mb-4">
                  Expiration Date: {subscription.expirationDate}
                </p>

                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-white">
                  Manage Subscription
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PSPlusSubscriptionsSection;
