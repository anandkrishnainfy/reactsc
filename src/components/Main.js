import React from "react";
import { ReactComponent as ReactLogo } from "../kmart.svg";
import MainImage from "../KMart.jpg";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <h3
        style={{ textAlign: "center", fontSize: "large", fontWeight: "bold" }}
      >
        Home
      </h3>
      <div>
        <img
          src={MainImage}
          loading="lazy"
          style={{
            width: "70%",
            height: "100%",
            display: "flex",
            margin: "auto",
          }}
        />
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "20%",
            color: "#ffffff",
            fontSize: "xxx-large",
            lineHeight: "1.1em",
          }}
        >
          We will deliver everything
          <br /> you need at your <br /> doorstep <br />
          <br />
          <Link
            to="/shop"
            style={{
              fontSize: "x-large",
              fontWeight: "700",
              position: "absolute",
              background: "#ee6e73",
              border: "10px solid #ee6e73",
              color: "#ffffff",
            }}
          >
            Shop Online
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Main;
