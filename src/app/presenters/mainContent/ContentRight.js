import React from "react";
import thumbsUp from "../../assets/ic_thumb_up_white_24px.svg";

function ContentRight(props) {
  return (
    <div className="container main-content-right">
      <div className="container video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/L4oQavzswpQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <div className="support container">
        <h2 className="header">Support Levels</h2>
        <div className="support buttons container">
          <button type="button" className="button button-dropdown">
            Show Filters ▼
          </button>
          <button
            type="button"
            className="button thumbsUp dark-primary-color text-primary-color"
          >
            <img alt="thumbs up" className="logo" src={thumbsUp} />
            Batch Recommend
          </button>
        </div>
        <div className="support-level container">
          <div className="support-header">
            <h4 className="header-content">High Support:</h4>
            <span className="de-emphasize">Speaking 1&2</span>
          </div>
          <a className="context-link text-link">8 Students</a>
        </div>
        <ul className="bullet-list default-primary-color text-primary-color default-primary-color text-primary-color">
          <li className="bullet">
            Provide students with small word banks and visuals.
          </li>
          <li className="bullet">Encourage partnerships and chatter.</li>
        </ul>
        <div className="support-level container">
          <div className="support-header">
            <h4 className="header-content">Moderate Support:</h4>
            <span className="de-emphasize">Speaking 3&4</span>
          </div>
          <a className="context-link text-link">3 Students</a>
        </div>
        <ul className="bullet-list default-primary-color text-primary-color default-primary-color text-primary-color">
          <li className="bullet">
            Encourage chatter and collaboration during the creation of the
            hashtags.
          </li>
        </ul>
        <div className="support-level container">
          <div className="support-header">
            <h4 className="header-content">Low Support:</h4>
            <span className="de-emphasize">Speaking 5&6</span>
          </div>
          <a className="context-link text-link">4 Students</a>
        </div>
        <ul className="bullet-list default-primary-color text-primary-color">
          <li className="bullet">No additional supports needed.</li>
        </ul>
      </div>
    </div>
  );
}

export default ContentRight;
