import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="box home-page">
      <h1>Welcome to MAHALKOM </h1>
      <p>
        Discover our authentic Moroccan products and manage your shopping cart easily.
      </p>

      <p>
        About Us: MAHALKOM is your one-stop shop for high-quality Moroccan items, from
        handcrafted goods to modern electronics. Enjoy shopping with a beautiful,
        clean interface inspired by Moroccan colors and patterns.
      </p>

      <Link to="/products">
        <button className="get-started">Get Started</button>
      </Link>
    </div>
  );
}
