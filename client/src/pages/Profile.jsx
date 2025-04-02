import { useState, useEffect } from "react";
import { Edit, Home, X } from "lucide-react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    nationality: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const userObj = JSON.parse(user || "{}");
    const id = userObj._id;

    axios
      .get(`http://localhost:5000/api/auth/profile/${id}`)
      .then((response) => {
        setUser({
          name: response.data.username,
          email: response.data.email,
          phone: response.data.phone,
          dob: response.data.dob || "",
          gender: response.data.gender || "",
          nationality: response.data.nationality || "",
          city: response.data.city || "",
          state: response.data.state || "",
        });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch profile.");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = JSON.parse(localStorage.getItem("user") || "{}");
    const id = userObj._id;

    axios
      .put(`http://localhost:5000/api/auth/profile/${id}`, user)
      .then(() => {
        setSuccess("Profile updated successfully!");
        setTimeout(() => {
          setIsEditing(false);
          setSuccess(null);
        }, 1500);
      })
      .catch(() => {
        setError("Failed to update profile.");
      });
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
        >
          <Home size={24} /> Home
        </Link>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start">
        <img
          src={Avatar}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-md"
        />
        <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <Edit size={16} /> Edit Profile
          </button>
        </div>
      </div>


      {/* About Me Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Personal  Info</h3>
        <p className="text-gray-600">
          <strong>Date of Birth:</strong> {user.dob}
        </p>
        <p className="text-gray-600">
          <strong>Gender:</strong> {user.gender}
        </p>
        <p className="text-gray-600 ">
          <strong>Nationality:</strong> {user.nationality}
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
        <p className="text-gray-600">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Address:</strong> {user.city}, {user.state}
        </p>
      </div>

      

      {/* Edit Profile Popup Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            {success && <div className="text-green-600 mb-2">{success}</div>}
            {error && <div className="text-red-600 mb-2">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />

                <label className="block font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />

                <label className="block font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />

                <label className="block font-medium">Gender</label>
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <label className="block font-medium">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={user.nationality}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />

                <label className="block font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />

                <label className="block font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={user.state}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
