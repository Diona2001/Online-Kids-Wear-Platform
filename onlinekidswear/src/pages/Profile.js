import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.png"; // Adjust path as necessary
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showProfileBox, setShowProfileBox] = useState(false); // Define the state for profile box visibility

  useEffect(() => {
    // Simulate fetching the current logged-in user's details from an API or localStorage
    const fetchUser = async () => {
      // Simulated user data (in real use-case, replace with API call or localStorage data)
      const currentUser = {
        username: "Jane Doe",
        cart: ["Dress", "Sandals"],
      };

      setUser(currentUser);
    };

    fetchUser();
  }, []);

  if (!user) {
    return null; // Optionally return a loading spinner here
  }

  return (
    <div
      className="profile-container"
      onMouseEnter={() => setShowProfileBox(true)} // Show profile box on hover
      onMouseLeave={() => setShowProfileBox(false)} // Hide profile box when not hovering
    >
      <img 
        src={profileImg} 
        className="profile-pic" 
        alt="User Profile" 
      />
      {showProfileBox && (
        <div className="profile-box">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Cart Items:</strong> {user.cart.length}</p>
          <ul>
            {user.cart.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <a href="/profile" className="profile-link">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Profile;
