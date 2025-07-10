'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

interface PsGame {
  id: number;
  title: string;
  description: string;
  image: string;
  platform: string;
}

const PsGamesSection: React.FC = () => {
  const [psGames, setPsGames] = useState<PsGame[]>([]);

  useEffect(() => {
    const fetchPsGames = async () => {
      try {
        const response = await axios.get('/api/ps-games');
        setPsGames(response.data);
      } catch (error) {
        console.error('Error fetching PlayStation games:', error);
      }
    };

    fetchPsGames();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">PlayStation Games</h1>
          <p className="text-gray-400 text-lg">Explore our collection of the latest PlayStation games.</p>
        </div>

        {psGames.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No PlayStation games available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {psGames.map((game) => (
              <div
                key={game.id}
                className="rounded-2xl bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300 group shadow-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-2 line-clamp-2 group-hover:text-white transition-colors duration-300">
                    {game.description}
                  </p>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                    Platform: {game.platform}
                  </p>

                  <button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-white">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PsGamesSection;