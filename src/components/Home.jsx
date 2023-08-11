import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { cards } from "../constants";
import PropTypes from "prop-types";
import axios from "axios";
import "./css/Home.css"

const Cards = ({ image, name, isLoggedIn }) => {
  const handleCardClick = () => {
    if (!isLoggedIn) {
      alert("Please log in to access this feature.");
    }
  };

  return (
    <div className="card">
      {isLoggedIn ? (
        <Link to="/game">
          <div className="card-image">
            <img src={image} alt={name} />
            <div className="card-name">{name}</div>
          </div>
        </Link>
      ) : (
        <div className="card-image" onClick={handleCardClick}>
          <img src={image} alt={name} />
          <div className="card-name">{name}</div>
        </div>
      )}
    </div>
  );
};

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post(
        "https://2ff6-106-213-83-232.ngrok-free.app/v1/login",
        {
          username,
          password,
        }
      );

      if (response.data) {
        setIsLoggedIn(true);
        console.log(response.data)
        alert("You are successfully logged in! You can access your account.");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="container">
        <nav>
          <div className="navbar">
            <img src={logo} alt="image_not_found" />
            <div className="login-logout_button">
              {isLoggedIn ? (
                <>
                  <button style={{marginLeft:"450px"}} onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <form onSubmit={handleLogin}>
                  <input
                    type="text"
                    name="username"
                    id="usernames"
                    placeholder="UserName"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <button type="submit">&nbsp;&nbsp;Login&nbsp;&nbsp;</button>
                </form>
              )}
            </div>
          </div>
          <div className="card-bodyforcards">
            {cards.map((services) => (
              <Cards
                key={services.name}
                {...services}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
