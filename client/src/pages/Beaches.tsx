import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";

interface Beach {
  _id: string;
  name: string;
  state: string;
  description: string;
  imageUrl: string;
}

const Beaches = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const [beaches, setBeaches] = useState<Beach[]>([]);
  const [filteredBeaches, setFilteredBeaches] = useState<Beach[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/beaches/${stateId}`)
      .then((response) => {
        setBeaches(response.data);
        setFilteredBeaches(response.data); // Initialize filtered list
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching beaches:", error);
        setError("Failed to load beaches.");
        setLoading(false);
      });
  }, [stateId]);

  // Filter beaches based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredBeaches(beaches);
      return;
    }
    const filtered = beaches.filter((beach) =>
      beach.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeaches(filtered);
  }, [searchTerm, beaches]);

  if (loading) return <div className="text-center text-xl">Loading beaches...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Beaches in Selected State</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
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
      </div>

      {/* Beaches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBeaches.length > 0 ? (
          filteredBeaches.map((beach) => (
            <Link to={`/beach/${beach._id}`} key={beach._id}>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer">
                <img
                  src={beach.imageUrl}
                  alt={beach.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-2">{beach.name}</h2>
                <p className="text-gray-600">
                  {beach.description.substring(0, 80)}...
                </p>
                <span className="text-blue-500 font-medium mt-2 inline-block">
                  View Details →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No beaches found.</p>
        )}
      </div>
    </div>
  );
};

export default Beaches;
