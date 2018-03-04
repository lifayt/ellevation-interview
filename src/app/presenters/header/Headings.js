import React from "react";
import logo from "../../assets/ic_local_movies_white_24px.svg";
import returnArrow from "../../assets/ic_keyboard_return_white_24px.svg";
import favorite from "../../assets/ic_favorite_border_white_24px.svg";
import ReactStars from "react-stars";

function Headings(props) {
  return (
    <div className="banner left container">
      <div className="headings container">
        <h1 className="header text-primary-color">Hanging Hashtags</h1>
        <div className="subheader container">
          <img alt="brand logo" className="logo" src={logo} />
          <h5 className="subheader text-primary-color">
            Building Backgrounds
            <br />
            Demonstrations and Experiences
          </h5>
        </div>
      </div>
      <div className="ratings container ">
        <ReactStars count={5} size={24} color1={"#ffffff"} color2={"#ffd055"} />
        <span className="ratings text text-primary-color">17 Reviews</span>
      </div>
      <div className="social buttons">
        <button
          type="button"
          className="save button dark-primary-color text-primary-color"
        >
          <img alt="save button" className="logo" src={favorite} />
          Save
          <span className="counter text">30</span>
        </button>
        <button
          type="button"
          className="share button dark-primary-color text-primary-color"
        >
          <img alt="share button" className="logo return" src={returnArrow} />
          Share
          <span className="counter text">30</span>
        </button>
        <button
          type="button"
          className="comment button dark-primary-color text-primary-color"
        >
          <img alt="comment button" className="logo return" src={returnArrow} />
          Comment
          <span className="counter text">30</span>
        </button>
      </div>
    </div>
  );
}

export default Headings;
