import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/count">Count</Link>
      </li>
    </ul>
  </nav>
)

export default Home
