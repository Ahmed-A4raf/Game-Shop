/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./categories.css";
import filterListData from "../data/filterListData";
import GameCard from "../components/GameCard";

const Categories = ({ games, reference }) => {
  // Initialize state with all games
  const [data, setData] = useState(games);

  // Set "All" as the active filter by default
  const [filters, setFilters] = useState(
    filterListData.map((filter) => ({
      ...filter,
      active: filter.name === "All", // Set "All" active by default
    }))
  );

  // Handle category filtering
  const handleFilterGames = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    // Filter games based on the selected category
    if (category === "All") {
      setData(games); // Show all games when "All" is selected
    } else {
      setData(games.filter((game) => game.category === category));
    }
  };

  // Handle search functionality
  const [text, setText] = useState("");
  const handleSearchGames = (e) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };

  // Run the "All" filter when the page loads
  useEffect(() => {
    handleFilterGames("All");
  }, [games]); // Run whenever the games prop updates

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          {/* categories filtering */}
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => {
                return (
                  <li
                    key={filter._id}
                    className={`${filter.active ? "active" : ""}`}
                    onClick={() => handleFilterGames(filter.name)}
                  >
                    {filter.name}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* search */}
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Search..."
                value={text}
                name="search"
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>
        {/* games */}
        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
