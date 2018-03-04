import React from "react";
import download from "../../assets/ic_file_download_white_24px.svg";
import link from "../../assets/ic_link_white_24px.svg";

function DownloadResources(props) {
  return (
    <div className="banner right container dark-primary-color">
      <h2 className="header text-primary-color">Resources</h2>
      <div className="container resource-link">
        <button className="button button--link button--flat text-primary-color">
          <img
            alt="think sheet download link"
            className="logo"
            src={download}
          />
          <div className="container button--text">
            <span className="category">Download:</span>
            Hanging Hashtag Think Sheet
          </div>
        </button>
      </div>
      <div className="container resource-link text-primary-color">
        <button className="button button--link button--flat text-primary-color">
          <img alt="external link" className="logo" src={link} />
          <div className="container button--text">
            <span className="category">Link:</span>
            Using Visuals to Build Interest and Understanding
          </div>
        </button>
      </div>
      <div className="container resource-link">
        <button className="button button--link button--flat text-primary-color">
          <img alt="edutopia link" className="logo" src={link} />
          <div className="container button--text">
            <span className="category">Link:</span>
            Edutopia - Common Core in Action: 10 Visual Literacy Stragies
            (Edutopia)
          </div>
        </button>
      </div>
    </div>
  );
}

export default DownloadResources;
