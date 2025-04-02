import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Umbrella, ArrowRight, Search } from "lucide-react";
import axios from "axios";

const States: React.FC = () => {
  const [states, setStates] = useState([]);
  const [beaches, setBeaches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);
  const [matchedBeaches, setMatchedBeaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchStatesAndBeaches = async () => {
      try {
        const statesResponse = await axios.get(
          "http://localhost:5000/api/states"
        );
        const beachesResponse = await axios.get(
          "http://localhost:5000/api/beaches/all"
        );

        setStates(statesResponse.data);
        setBeaches(beachesResponse.data);
        setFilteredStates(statesResponse.data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchStatesAndBeaches();
  }, []);

  // Search function that dynamically filters beaches and states
  useEffect(() => {
    if (!searchTerm) {
      setFilteredStates(states);
      setMatchedBeaches([]);
      return;
    }

    const matchedBeachesList = beaches.filter((beach) =>
      beach.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMatchedBeaches(matchedBeachesList);

    const matchedStateIds = new Set(matchedBeachesList.map((beach) => beach.state));
    const results = states.filter((state) => matchedStateIds.has(state._id));
    
    setFilteredStates(results);
  }, [searchTerm, states, beaches]);

  // Function to handle beach selection
  const handleBeachClick = (beachId: string) => {
    navigate(`/beach/${beachId}`);
    console.log(beachId)
    setSearchTerm(""); // Clear search term to hide dropdown
    setMatchedBeaches([]); // Hide dropdown after selection
  };

  if (loading) return <p className="text-center text-gray-600">Loading data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Explore Beaches by State</h1>
        <p className="text-xl mb-2">Discover beautiful beaches across different states</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center relative">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search beaches..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>

        {/* Dropdown showing matched beaches */}
        {searchTerm && matchedBeaches.length > 0 && (
          <div className="absolute mt-16 w-full max-w-lg bg-white shadow-md rounded-lg z-10 overflow-hidden">
            {matchedBeaches.map((beach) => (
              <div
                key={beach._id}
                className="block px-4 py-2 hover:bg-blue-100 text-gray-700 cursor-pointer"
                onClick={() => handleBeachClick(beach._id)}
              >
                {beach.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* States Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStates.map((state) => (
          <Link
            to={`/states/${state._id}/beaches`}
            key={state._id}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={state.imageUrl || "default-image.jpg"}
                alt={`Beaches in ${state.name}`}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <MapPin size={20} className="mr-2 text-blue-500" />
                  {state.name}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center">
                  <Umbrella size={14} className="mr-1" />
                  {state.beachCount} {state.beachCount === 1 ? "beach" : "beaches"}
                </span>
              </div>
              <p className="mt-3 text-gray-600">
                Explore beautiful beaches in {state.name}
              </p>
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  View beaches <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default States;
