/* eslint-disable react/prop-types */
import React from 'react';

import './tabs.css';

function Tab(props) {
  const { isActive, content, handleOnClick } = props;
  return (
    <div
      onClick={handleOnClick}
      className={isActive ? 'active-tab' : 'inactive-tab'}
      role="button"
      aria-hidden="true"
    >
      {content}
    </div>
  );
}

export default Tab;
