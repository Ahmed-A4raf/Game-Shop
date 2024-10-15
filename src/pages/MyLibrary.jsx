import React from "react";
import "./myLibrary.css";
import GameCard from "../components/GameCard";

const MyLibrary = ({ games, reference }) => {
  return (
    <section id="library" className="library" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Library</h1>
        </div>
        <div className="row">
          {games.length === 0 ? (
            <div className="fs-1 fw-bolder w-50 my-5 p-5 mx-auto text-center rounded-5 sh">
              <h2 className="fs-1 fw-bolder">Your library is empty</h2>
              <i className="bi bi-x-octagon-fill icon-sh"></i>
            </div>
          ) : (
            games.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default MyLibrary;
