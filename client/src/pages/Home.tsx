import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Umbrella, Map } from 'lucide-react';
import { beachData } from '../data/beaches';

const Home: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stateFromUrl = queryParams.get('state');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(stateFromUrl);
  const [filteredBeaches, setFilteredBeaches] = useState(beachData.beaches);
  
  // Get unique states from beach data
  const states = [...new Set(beachData.beaches.map(beach => beach.state))].sort();

  useEffect(() => {
    // Update selectedState if state parameter changes in URL
    setSelectedState(stateFromUrl);
  }, [stateFromUrl]);

  useEffect(() => {
    let results = beachData.beaches;
    
    // Filter by state if selected
    if (selectedState) {
      results = results.filter(beach => beach.state === selectedState);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(beach => 
        beach.name.toLowerCase().includes(term) || 
        beach.location.toLowerCase().includes(term) ||
        beach.state.toLowerCase().includes(term)
      );
    }
    
    setFilteredBeaches(results);
  }, [searchTerm, selectedState]);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Discover Beautiful Beaches</h1>
        <p className="text-xl mb-6">Find your perfect beach getaway across the world</p>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search beaches by name or location..."
            className="w-full p-3 pl-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-500" size={20} />
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link to="/states" className="inline-flex items-center text-white hover:text-blue-100">
            <Map size={16} className="mr-1" />
            View all states
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MapPin size={20} className="mr-2 text-blue-500" />
            States
          </h2>
          <div className="space-y-2">
            <button
              className={`block w-full text-left px-3 py-2 rounded-md ${selectedState === null ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => setSelectedState(null)}
            >
              All States
            </button>
            {states.map(state => (
              <button
                key={state}
                className={`block w-full text-left px-3 py-2 rounded-md ${selectedState === state ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setSelectedState(state)}
              >
                {state}
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Umbrella size={20} className="mr-2 text-blue-500" />
            {selectedState ? `Beaches in ${selectedState}` : 'All Beaches'}
            <span className="ml-2 text-sm text-gray-500 font-normal">({filteredBeaches.length} beaches)</span>
          </h2>
          
          {filteredBeaches.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              No beaches found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBeaches.map(beach => (
                <Link to={`/beach/${beach.id}`} key={beach.id} className="block">
                  <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={beach.imageUrl} 
                      alt={beach.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{beach.name}</h3>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPin size={16} className="mr-1" />
                        {beach.location}, {beach.state}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;