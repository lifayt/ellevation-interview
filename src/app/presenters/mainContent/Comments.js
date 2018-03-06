import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "../../../components/tabs/Tabs";
import chat from "../../assets/ic_chat_bubble_outline_white_24px.svg";
import search from "../../assets/ic_search_black_24px.svg";
import thumbsUp from "../../assets/ic_thumb_up_black_24px.svg";
import desert from "../../assets/desert.jpeg";

function Comments(props) {
  const chatBox = (
    <div className="chatbox container">
      <div className="chatbox-header">
        <div className="search container">
          <img className="search logo" alt="magnifying glass" src={search} />
          <input
            type="text"
            placeHolder="Search Content"
            className="searchbar"
          />
        </div>
        <div className="filter">
          <button
            type="button"
            className="button chatbox button-dropdown dark-primary-color text-primary-color"
          >
            <span>Newest</span>
            <span>▼</span>
          </button>
        </div>
      </div>
      <div className="chatbox-comment">
        <div className="img placeholder dark-primary-color" />
        <div className="comment-content">
          <div className="comment-title">
            <h4 className="header-content name">Karen Earl</h4>
            <span className="location">(Syracuse City Schools)</span>
            <span className="timeStamp">a year ago</span>
          </div>
          <div className="comment-body">
            Works well if you group low support with high support for second
            part of activity.
            <br />
            <span className="comment-social">
              <img src={thumbsUp} alt="thumbs up" className="logo" />
              12
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="comments container">
      <div className="comments-header">
        <h2 className="header">Comments</h2>
        <button
          className="button comment dark-primary-color text-primary-color"
          type="button"
        >
          <img alt="speech bubble" src={chat} />
          Add New Comment
        </button>
      </div>
      <div className="comments-tabs container">
        <Tabs>
          <TabList>
            <Tab>Comments (1)</Tab>
            <Tab>Private Notes (30)</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{chatBox}</TabPanel>
            <TabPanel />
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Comments;
