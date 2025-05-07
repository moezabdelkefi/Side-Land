import React from "react";
import Filter from "../common/Filter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const filterTabs = [
  {
    id: 1,
    text: "Residential",
    subText: "Residential",
  },
  {
    id: 2,
    text: "Commercial",
    subText: "Commercial",
  },
  {
    id: 3,
    text: "New Projects",
    subText: "New Projects",
  },
];

const TabFilter = (props) => {
  return (
    <>
      <Tabs>
        <TabList className={"common-tab nav nav-pills"}>
          {filterTabs.map((filterTab, index) => (
            <Tab key={index} className={"nav-link"}>
              {filterTab.text}
            </Tab>
          ))}
          </TabList>
          {filterTabs.map((filterTab, index) => (
          <TabPanel key={index}>
            <Filter
              colClass={props.colClass}
              buttonText={filterTab.subText}
              isCommercial={filterTab.subText === "Commercial"}
              isNewProjects={filterTab.subText === "New Projects"}
            />
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default TabFilter;