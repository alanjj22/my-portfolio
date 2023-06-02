import React from 'react';

import gitIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import twitterIcon from '../../assets/twitter.png';
import './connectMe.css';

const mySocialMedias = [
  { icon: gitIcon, alt: 'hello', link: 'hello' },
  { icon: linkedinIcon, alt: 'hello', link: 'hello' },
  { icon: twitterIcon, alt: 'hello', link: 'hello' },
  { icon: twitterIcon, alt: 'hello', link: 'hello' },
];

function ConnectWithMe() {
  return (
    mySocialMedias.map((socialMedia) => (
      <div key={socialMedia.icon} className="social-media">
        <img src={socialMedia.icon} alt={socialMedia.alt} />
      </div>
    ))
  );
}

export default ConnectWithMe;
