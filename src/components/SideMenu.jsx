/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./sideMenu.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem";
import socialIconsDat from "../data/socialIconsData";
import SocialIcons from "./SocialIcons";

const SideMenu = ({ active, sectionActive }) => {
  const [navData, setNavData] = useState(navListData);
  const [socialIcons, setSocialIcons] = useState(socialIconsDat);

  const handleNavOnClick = (id, target) => {
    // console.log(id);
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? "active" : ""}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="barnd">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => {
          return (
            <NavListItem
              key={item._id}
              item={item}
              navOnClick={handleNavOnClick}
            />
          );
        })}
      </ul>
      <ul className="social">
        {socialIcons.map((item) => {
          return <SocialIcons key={item._id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
