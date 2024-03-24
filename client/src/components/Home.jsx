import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <li className="homel">
          Here is Where Technology Meets Expertise, Unleashing Precision in Skin
          Health - Your Personalized Dermatology Companion!
        </li>
      </div>
      <div className="containerHome">
        <li className="homel">
          With DermAid Provision, you'll experience the perfect synergy of
          innovation and expertise, resulting in a personalized dermatology
          companion like no other.{" "}
        </li>
      </div>
      <div className="scantext">
        To Scan the skin or upload image click on the button below
      </div>
      <div className="butt">
        <button type="submit" className="bt">
          <Link to="/Scans" style={{ textDecoration: "none" ,backgroundColor: "#06DBF8", color:"#fff"}}>
            DermScan
          </Link>
        </button>
      </div>
      <div className="corner"></div>
    </>
  );
};

export default Home;
