import React from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '../../../components/tabs/Tabs';
import bullseye from '../../assets/ic_track_changes_black_24px.svg';
import books from '../../assets/ic_library_books_black_24px.svg';
import volume from '../../assets/ic_volume_up_white_24px.svg';
import download from "../../assets/ic_file_download_black_24px.svg";
import lightbulb from '../../assets/ic_lightbulb_outline_black_24px.svg';
import folder from '../../assets/ic_folder_black_24px.svg';

function MainContent(props) {
  const aboutPanel = (
    <div className="about container">
      <div className="container about--left">
        <div className="objective container">
          <h4 className="header-content"> 
            <img alt="objectives" className="logo" src={bullseye} />
            Objective
          </h4>
          <div className="objective content">
            Students will write short phrases related to their background knowledge, experiences, and assumptions about an image connected to the lesson topic. 
          </div>
        </div>
        <div className="description container">
          <h4 className="header-content"> 
            <img alt="descriptions" className="logo" src={books} />
            Description
          </h4>
          <div className="description content">
            An image is posted without any words or captions for all the students to see. Students think about and discuss the image in terms of what they see, how it makes them feel, 
            and how it is important. After the discussion, students choose a word or short phrase 
            about the image that reflects their interpretation or inference about its meaning and write it on an index card with a hashtag. The students then place the index cards all
            around the image as a "frame." A final discussion occurs around shared and divergent words and ideas. 
          </div>
        </div>
      </div>
      <div className="container about--right default-primary-color">
        <h4 className="header-content text-primary-color"> 
          <img alt="speaking" className="logo" src={volume} />
          Speaking
        </h4>
        <div className="container button--text text-primary-color">
          Thinking, Reading
        </div>
        <h5 className="subheader text-primary-color">
          Small Groups, Full Classrooms Grades K-12 
        </h5>
      </div>
    </div>
  );

  const activityPlanPanel = (
    <div className="activity-plan container">
      <div className="before-lesson container">
        <h4 className="header-content"> 
          <img alt="volume speaker" className="logo" src={books} />
          Before Lesson
        </h4>
        <div className="text">
          Select and post an image--without words-for the activity. Consider using photographs, magazine clippings, cartoons,
          images from websites, or any other visual resource.
        </div>
        <a className="context-link text-primary-highlight">
          <img
              alt="think sheet download link"
              className="logo"
              src={download}
            />
          <div className="container button--text">
            <span className="category">Download:</span>
            Hanging Hashtag Think Sheet
          </div>
        </a>
        <ul className="tips-list">
          <li className="tip">
            <img alt="lightbulb" className="logo" src={lightbulb} />
            <span className="category">TIP:</span> This activity may also be done with videos or video clips, so long as an image can be frozen on screen or pulled from a printed source (such as a movie poster).
          </li>
          <li className="tip">
            <img alt="lightbulb" className="logo" src={lightbulb} />
            <span className="category">TIP:</span> Students may create a poster using programs such as Wordle or Tagxedo with keywords or phrases from the brainstorm activity.
          </li>
          <li className="tip">
            <img alt="lightbulb" className="logo" src={lightbulb} />
            <span className="category">TIP:</span> Use this activity as an introduction to a unit of study.
          </li>
        </ul>
      </div>
      <div className="after-lesson container"> 
        <h4 className="header-content"> 
          <img alt="folder" className="logo" src={books} />
          During Lesson
        </h4>
        <ul className="task-list">
          <li className="task">
            Students view the image up close in order to notice details.
          </li>
          <li className="task">
            In partners, groups, or as a whole class, students share their initial observations.
          </li>
          <li className="task">
            Emphasize that there is no one correct answer and question students about the deeper meaning behind their initial observations.
          </li>
          <li className="task">
          Students write that keyword or phrase on a n index card with a hashtag (#) before it, the same way they might do so on social media.
          </li>
          <li className="task">
            Students write that keyword or phrase on a n index card with a hashtag (#) before it, the same way they might do so on social media.
          </li>
          <li className="task">
          </li>
          <li className="task">
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="main-content container">
      <div className="container column-left">
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Activity Plan</Tab>
            <Tab>Examples</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{aboutPanel}</TabPanel>
            <TabPanel>{activityPlanPanel}</TabPanel>
            <TabPanel>Examples</TabPanel>
          </TabPanels>
        </Tabs>
        <div className="container comments">
        </div>
      </div>
      <div className="container column-right">

      </div>
    </div>
  );
}

export default MainContent;