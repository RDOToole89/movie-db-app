/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";

function MovieCard(props) {
  const { title, year, poster, imdbId } = props;
  return (
    <div>
      <NavLink to={imdbId}>
        <h4>{title}</h4>
      </NavLink>
      <p>{year}</p>
      <img style={{ width: "300px" }} src={poster} />
    </div>
  );
}

export default MovieCard;
