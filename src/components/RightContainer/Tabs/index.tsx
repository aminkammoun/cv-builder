import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import Settings from '../Settings'
import React from "react";
   
  export function TabsDefault() {
    const data = [
      {
        label: "HTML",
        value: "html",
        desc: <Settings /> ,
      },
      {
        label: "Settings",
        value: "Settings",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      }
    ];
    const [activeTab, setActiveTab] = React.useState("html");
    return (
        <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none bg-gray-900 p-0 "
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-500 shadow-none rounded-none ",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} children={""} placeholder={undefined} >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody children={""} placeholder={undefined}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }

  export default TabsDefault;