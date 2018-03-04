import React from "react";
import Headings from "./Headings";
import DownloadResources from './DownloadResources';

function Header(props) {
  return (
    <div className="banner container default-primary-color">
      <Headings />
      <DownloadResources />
    </div>
  );
}

export default Header;
