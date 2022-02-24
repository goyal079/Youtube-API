import React from "react";
import yt from "./youtube.png";
import { useState } from "react";
const Searchbar = ({ handleFormSubmit }) => {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    term && handleFormSubmit(term);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        <img
          style={{ width: "200px", height: "100px", justifyContent: "center" }}
          src={yt}
          alt="youtube logo"
        ></img>
      </h2>
      <div
        className="search-bar ui segment"
        style={{ backgroundColor: "#000000" }}
      >
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <input
              onChange={handleChange}
              name="video-search"
              type="text"
              placeholder="Search.."
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
