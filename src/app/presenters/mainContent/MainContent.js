import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "../../../components/tabs/Tabs";
import { ExamplesPanel, AboutPanel, ActivityPlanPanel } from "./Panels";
import ContentRight from "./ContentRight";
import Comments from "./Comments";

function MainContent(props) {
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
            <TabPanel>
              <AboutPanel />
            </TabPanel>
            <TabPanel>
              <ActivityPlanPanel />
            </TabPanel>
            <TabPanel>
              <ExamplesPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Comments />
      </div>
      <ContentRight />
    </div>
  );
}

export default MainContent;
