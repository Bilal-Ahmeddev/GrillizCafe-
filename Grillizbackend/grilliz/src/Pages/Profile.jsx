import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user profile
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put("http://localhost:5000/api/users/profile", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(res.data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-10 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your Profile</h2>
      {message && <p className="text-center text-green-600">{message}</p>}
      <form onSubmit={handleSave} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-600"
            required
          />
        </div>

        <button type="submit" className="w-full bg-brown-600 text-white py-2 rounded-lg hover:bg-brown-700 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
