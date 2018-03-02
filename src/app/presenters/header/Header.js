import React from 'react';
import logo from '../../assets/ic_local_movies_white_24px.svg';
import ReactStars from 'react-stars';

function Header(props) {
  return (
    <div className="banner container default-primary-color">
      <div className="headings container">
        <h1 className="header text-primary-color">
          Hanging Hashtags
        </h1>
        <div className="subheader container">
          <img className="logo" src={logo} />
          <h5 className="subheader text-primary-color">
            Building Backgrounds
            <br />
            Demonstrations and Experiences
          </h5>
        </div>
      </div>
      <div className="ratings container ">
        <ReactStars
          count={5}
          size={24}
          color1={'#ffffff'}
          color2={'#ffd055'}
        />
        <span className="ratings text text-primary-color">
          17 Reviews
        </span>
      </div>
      <div className="social buttons">
        <button type="button" className="save button">
          Save
        </button>
        <button type="button" className="share button">
          Share
        </button>
        <button type="button" className="comment button">
          Comment
        </button>
      </div>
    </div>
  );
}

export default Header