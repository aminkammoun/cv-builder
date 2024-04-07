
import Settings from '../Settings'
import AiAssitance from '../AiAssitance'
import React, { useState } from "react";

export function TabsDefault() {
  const [activeTab, setActiveTab] = useState('AIAssistance');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="flex justify-around">
        <button className={activeTab === 'AIAssistance' ? 'tab-btn-active btn' : 'tab-btn btn' } onClick={() => handleTabClick('AIAssistance')}>AI Assistance</button>
        <button className={activeTab === 'Settings' ? 'tab-btn-active btn' : 'tab-btn btn'} onClick={() => handleTabClick('Settings')}>Settings</button>
      </div>
      {/* Tab content */}
      <div id="AIAssistance" className={activeTab === 'AIAssistance' ? 'tabcontent block' : 'tabcontent hidden'}>
        <AiAssitance />
        {/* Add content for AI Assistance tab */}
      </div>
      <div id="Settings" className={activeTab === 'Settings' ? 'tabcontent block' : 'tabcontent hidden'}>
        <Settings />
        {/* Add content for Settings tab */}
      </div>
    </div>
  );
}

export default TabsDefault;