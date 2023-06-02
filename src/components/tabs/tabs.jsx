/* eslint-disable max-len */
import React, { useState } from 'react';
import Tab from './tab';

import './tabs.css';
import Portfolio from '../portfolio/portfolio';

const tabs = ['Portfolio', 'Contact me'];

function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="tab-wrapper">
        {tabs.map((tab, index) => (
          <Tab key={tab} isActive={currentTab === index} content={tab} handleOnClick={() => setCurrentTab(index)} />
        ))}
      </div>
      {currentTab === 0 && <div className="portfolio-container"><Portfolio /></div>}
      {currentTab === 1 && <div>Contact me</div>}
    </>
  );
}

export default Tabs;
