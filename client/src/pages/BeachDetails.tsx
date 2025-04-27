import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Waves,
  Sun,
  Wind,
  ThermometerSun,
  ArrowLeft,
  Star,
} from "lucide-react";

const BeachDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [beach, setBeach] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(id);
    const fetchBeach = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/beaches/beach/${id}`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Beach not found");
        }
        const data = await response.json();
        setBeach(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeach();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error || !beach) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Beach not found</h2>
        <p className="mb-4">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={18} className="mr-1" />
        Back to beaches
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-80">
          <img
            src={beach.imageUrl || "/default-beach.jpg"}
            alt={beach.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl font-bold">{beach.name}</h1>
              <p className="flex items-center mt-2">
                <MapPin size={18} className="mr-1" />
                {beach.state?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <Waves className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="font-medium text-gray-700">Water Conditions</h3>
                <p className="text-lg font-semibold">
                  {beach.waterConditions || "Unknown"}
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg flex items-center">
              <Sun className="text-yellow-600 mr-3" size={24} />
              <div>
                <h3 className="font-medium text-gray-700">Weather</h3>
                <p className="text-lg font-semibold">
                  {beach.weather || "Varies"}
                </p>
              </div>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg flex items-center">
              <Wind className="text-cyan-600 mr-3" size={24} />
              <div>
                <h3 className="font-medium text-gray-700">Wind</h3>
                <p className="text-lg font-semibold">{beach.wind || "Calm"}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">About this Beach</h2>
            <p className="text-gray-700 leading-relaxed">{beach.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {beach.amenities?.length > 0 ? (
                beach.amenities.map((amenity: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <Star size={16} className="text-blue-500 mr-2" />
                    {amenity}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No amenities listed</li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Best Time to Visit</h2>
            <div className="flex items-center">
              <ThermometerSun size={20} className="text-orange-500 mr-2" />
              <p className="text-gray-700">
                {beach.bestTimeToVisit || "Year-round"}
              </p>
            </div>
            <br/>
            <div className="flex items-center">
              <MapPin size={20} className="text-orange-500 mr-2" />
              {beach.latitude && beach.longitude ? (
                <a
                  href={`https://www.google.com/maps?q=${beach.latitude},${beach.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on Google Maps
                </a>
              ) : (
                <p className="text-gray-700">Location unavailable</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachDetails;
