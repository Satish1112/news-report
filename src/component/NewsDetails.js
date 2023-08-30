import React from "react";
import { useLocation } from "react-router-dom";

function NewsDetails() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div>
        <img
          alt="urlToImage"
          src={location.state.data.urlToImage}
          height="500px"
          width="auto"
        />
      </div>
      <div>
        <h1>{location.state.data.title}</h1>
        <h3>{location.state.data.description}</h3>
        <h2>{location.state.data.author}</h2>
      </div>
    </div>
  );
}

export default NewsDetails;
