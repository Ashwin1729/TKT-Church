import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const styleHandler = ({ isActive }) => ({
  position: "relative",
  letterSpacing: "0.41px",
  lineHeight: "16.3px",
  fontWeight: "20",
  display: "inline-block",
  width: "160px",
  flexShrink: "0",
  fontSize: "medium",
  color: "white",
  textDecoration: "none",
  opacity: isActive ? "1" : "0.3",
});

const NavBar = () => {
  return (
    <div className={styles.frameGroup}>
      <div className={styles.homeParent}>
        <NavLink to="/" style={styleHandler}>
          Home
        </NavLink>
        <NavLink to="/ministries" style={styleHandler}>
          Ministries
        </NavLink>
        <NavLink to="/connect" style={styleHandler}>
          Connect
        </NavLink>
        <NavLink to="/ourApp" style={styleHandler}>
          Our App
        </NavLink>
        <NavLink to="/giveOnline" style={styleHandler}>
          Give Online
        </NavLink>
      </div>
      <img className={styles.image23Icon} alt="" src="../image-23@2x.png" />
    </div>
  );
};

export default NavBar;
