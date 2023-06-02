import React from 'react';

import profilrPicture from '../../assets/profile_pic.jpeg';
import downloadIcon from '../../assets/download.png';
import ConnectWithMe from '../../components/connectMe/connectMe';

import './home.css';
import Tabs from '../../components/tabs/tabs';

function Home() {
  const handleDownload = () => {
    const fileUrl = 'https://drive.google.com/file/d/1Yb7nswnZef19XAENAbwhZpyunJFmU58W/view?usp=drive_link'; // Replace with your file URL

    window.open(fileUrl, '_blank');
  };

  return (
    <div className="home-container">
      <div className="header">
        <div className="profile-picture">
          <img src={profilrPicture} alt="alan" />
        </div>
        <div className="profile-data">
          <div className="name">Alan Jomy Joseph</div>
          <div className="position">Associate software engineer</div>
          <div className="social-media-handles">
            <ConnectWithMe />
          </div>
        </div>
      </div>
      <div className="profile-facts">
        <div className="fact">7 Years of work experiance</div>
        <div className="fact">7 Years of work experiance</div>
        <div className="fact">7 Years of work experiance</div>
      </div>
      <div className="resume-section">
        <div aria-hidden="true" className="download-button" onClick={handleDownload}>
          <span>Download CV</span>
          <img src={downloadIcon} alt="download" />
        </div>
      </div>
      <div className="tab-container">
        <Tabs />
      </div>
    </div>
  );
}

export default Home;
