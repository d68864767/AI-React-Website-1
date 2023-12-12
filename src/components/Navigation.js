import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/educational-content">Educational Content</Link></li>
        <li><Link to="/interactive-demos">Interactive Demos</Link></li>
        <li><Link to="/use-cases-showcase">Use Cases Showcase</Link></li>
        <li><Link to="/community-forum">Community Forum</Link></li>
        <li><Link to="/ai-news">AI News</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
