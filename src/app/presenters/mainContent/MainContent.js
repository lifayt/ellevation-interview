import React from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '../../../components/tabs/Tabs';
import bullseye from '../../assets/ic_track_changes_black_24px.svg';
import books from '../../assets/ic_library_books_black_24px.svg';
import volume from '../../assets/ic_volume_up_white_24px.svg';
import download from "../../assets/ic_file_download_black_24px.svg";
import lightbulb from '../../assets/ic_lightbulb_outline_black_24px.svg';
import folder from '../../assets/ic_folder_black_24px.svg';
import checkmark from '../../assets/ic_check_circle_black_24px.svg';
import warning from '../../assets/ic_warning_black_24px.svg';
import thumbsUp from '../../assets/ic_thumb_up_white_24px.svg';

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
            <div className="context-text text-secondary-highlight">
              <img
                  alt="think sheet download link"
                  className="logo"
                  src={warning}
                />
              <div className="container button--text">
                <span className="category">WATCH OUT FOR:</span>
                Pair students as appropriate as they decide upon a hashtag for the image.
              </div>
            </div>
            <div className="context-text text-tertiary-highlight">
              <img
                  alt="think sheet download link"
                  className="logo"
                  src={checkmark}
                />
              <div className="container button--text">
                <span className="category">Success: </span>
                Students actively studying the image and taking the time to share their ideas.
              </div>
            </div>
          </li>
          <li className="task">
            Emphasize that there is no one correct answer and question students about the deeper meaning behind their initial observations.
          </li>
          <li className="task">
            Students write that keyword or phrase on a n index card with a hashtag (#) before it, the same way they might do so on social media.
            <div className="context-text text-tertiary-highlight">
              <img
                  alt="think sheet download link"
                  className="logo"
                  src={checkmark}
                />
              <div className="container button--text">
                <span className="category">Success: </span>
                Students explaining why they chose a specific word or phrase.
              </div>
            </div>
          </li>
          <li className="task">
            Students write that keyword or phrase on a n index card with a hashtag (#) before it, the same way they might do so on social media.
            <div className="context-text text-secondary-highlight">
              <img
                  alt="think sheet download link"
                  className="logo"
                  src={warning}
                />
              <div className="container button--text">
                <span className="category">WATCH OUT FOR:</span>
                Encourage the use of new vocabulary by making sure students understand every word used in this activity. Provide dictionary resources if necessary.
              </div>
            </div>
          </li>
          <li className="task">
            As students finish, invite them to post their cards around the image, creating a frame.
          </li>
          <li className="task">
            When the frame is finished and students have had a chance to examine it, gather students together a s a whole class to reflect on the hashtags.
            <div className="context-text text-tertiary-highlight">
              <img
                  alt="think sheet download link"
                  className="logo"
                  src={checkmark}
                />
              <div className="container button--text">
                <span className="category">Success: </span>
                Students noticing similarities, differences, surprises, context, or anything else that they noticed about the words they assigned to the image.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const examplesPanel = (
    <div className="examples container">
      <div className="filter buttons">
        <button type="button" className="button button-dropdown">
          Grades: 3-5 ▼
        </button>
        <button type="button" className="button button-dropdown">
          Subject: Math ▼
        </button>
      </div>
      <h2 className="header">
        3-5 Math
      </h2>
      <div className="example-objectives container dark-primary-color text-primary-color">
        <div className="content-objective">
          <h4 className="header-content"> 
            Content Objectives
          </h4> 
          <div className="text">
            Students will recognize volume as an attribute of solid figures. 
          </div>
        </div>
        <div className="language-objective">
          <h4 className="header-content"> 
            Language Objectives
          </h4> 
          <div className="text">
            Students will work to describe objects using prepositions.
          </div>
        </div>
      </div>
      <div className="examples text">
        <p>
        Teacher will place a variety of images from magazines that show a volume in a variety of ways: drink containers, swimming pools. beakers, and boxes/cubes. 
        </p>
        <p>
        Teacher will explain to the students that they will be adding descriptive words in the form of hashtags for how much and what is being displayed in each image. 
        </p>
        <p>
        Working in small groups, students will rotate from image to image, discussing what they see and work to add hashtags describing how much is there.
        </p>
        <p>
        Gathering students and images together, the teacher will guide a discussion on the basics of volume, building on the students contributions to the images and dispelling misconceptions. 
        </p>
        <p>
        The teacher will continue with the lesson on recognizing volume as an attribute of solid figures.
        </p>
      </div>
    </div>
  );

  return (
    <div className="main-content container">
      <div className="container main-content-left">
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Activity Plan</Tab>
            <Tab>Examples</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{aboutPanel}</TabPanel>
            <TabPanel>{activityPlanPanel}</TabPanel>
            <TabPanel>{examplesPanel}</TabPanel>
          </TabPanels>
        </Tabs>
        <div className="container comments">
        </div>
      </div>
      <div className="container main-content-right">
        <div className="container video">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/L4oQavzswpQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
        </div>
        <div className="support container">
          <h2 className="header">
            Support Levels
          </h2> 
          <div className="support buttons container">
            <button type="button" className="button button-dropdown">
              Show Filters ▼
            </button>
            <button type="button" className="button thumbsUp dark-primary-color text-primary-color">
              <img alt="thumbs up" className="logo" src={thumbsUp} />
              Batch Recommend 
            </button>
          </div>
          <div className="support-level container">
            <div className="support-header">
              <h4 className="header-content">
                High Support:
              </h4> 
              <span className="de-emphasize">
              Speaking 1&2
              </span>
            </div>
            <a className="context-link text-link">
            8 Students
            </a>
          </div>
          <ul className="bullet-list default-primary-color text-primary-color default-primary-color text-primary-color">
            <li className="bullet">
              Provide students with small word banks and visuals.
            </li>
            <li className="bullet">
         	    Encourage partnerships and chatter.
            </li>
          </ul>
          <div className="support-level container">
            <div className="support-header">
              <h4 className="header-content">
                Moderate Support:
              </h4>
              <span className="de-emphasize">
                Speaking 3&4
              </span>
            </div>
            <a className="context-link text-link">
              3 Students
            </a>
          </div>
          <ul className="bullet-list default-primary-color text-primary-color default-primary-color text-primary-color">
            <li className="bullet">
              Encourage chatter and collaboration during the creation of the hashtags.
            </li>
          </ul>
          <div className="support-level container">
            <div className="support-header">
              <h4 className="header-content">
                Low Support:
              </h4>
              <span className="de-emphasize">
                Speaking 5&6
              </span>
            </div>
            <a className="context-link text-link">
              4 Students
            </a>
          </div>
          <ul className="bullet-list default-primary-color text-primary-color">
            <li className="bullet">
              No additional supports needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContent;