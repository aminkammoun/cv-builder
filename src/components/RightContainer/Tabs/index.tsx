import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import Settings from '../Settings'
  import AiAssitance from '../AiAssitance'
import React from "react";
   
  export function TabsDefault() {
    const data = [
      {
        label: "Ai Assistance",
        value: "html",
        desc:<AiAssitance/> ,
      },
      {
        label: "Settings",
        value: "Settings",
        desc:  <Settings />,
      }
    ];
    const [activeTab, setActiveTab] = React.useState("html");
    return (
        <Tabs value={activeTab} >
        <TabsHeader
          className="rounded-none bg-gray-900 p-0 "
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-500 shadow-none rounded-none text-xs",
          }}
        > 
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} children={""} placeholder={undefined} className="text-xl" >
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