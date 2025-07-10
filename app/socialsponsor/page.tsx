'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

interface SocialMediaSponsorService {
  id: number;
  name: string;
  description: string;
  price: number;
  reachPerMonth: number;
}

const SocialMediaSponsorSection: React.FC = () => {
  const [sponsorServices, setSponsorServices] = useState<SocialMediaSponsorService[]>([]);

  useEffect(() => {
    const fetchSponsorServices = async () => {
      try {
        const response = await axios.get('/api/social-media-sponsor-services');
        setSponsorServices(response.data);
      } catch (error) {
        console.error('Error fetching social media sponsor services:', error);
      }
    };

    fetchSponsorServices();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Social Media Sponsor Services</h1>
          <p className="text-gray-400 text-lg">
            Reach a wider audience through our social media sponsorship programs.
          </p>
        </div>

        {sponsorServices.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No sponsor services available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsorServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300 group shadow-xl overflow-hidden p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 mb-1">
                  {service.description}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 mb-1">
                  Price: ${service.price}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 mb-4">
                  Reach: {service.reachPerMonth} users per month
                </p>

                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-white">
                  Sponsor Now
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

export default SocialMediaSponsorSection;