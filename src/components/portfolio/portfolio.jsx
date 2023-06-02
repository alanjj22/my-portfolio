import React from 'react';

import gitIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import twitterIcon from '../../assets/twitter.png';

import './portfolio.css';

const portfolioList = [
  { icon: gitIcon, alt: 'hello', link: 'hello' },
  { icon: linkedinIcon, alt: 'hello', link: 'hello' },
  { icon: twitterIcon, alt: 'hello', link: 'hello' },
  { icon: twitterIcon, alt: 'hello', link: 'hello' },
];

const Portfolio = () => portfolioList.map((portfolioItem) => (
  <div className="portfolio-card">
    <img src={portfolioItem.icon} alt={portfolioItem.alt} />
  </div>
));

export default Portfolio;
