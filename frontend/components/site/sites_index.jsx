import React from 'react';

const SitesIndex = () => {
  const header = "Hi! I'm Raf. Check me out!";
  return (
    <ul className='sites-index-container'>
      <div className='sites-index-header'>
        { header }
      </div>

      <div className='sites-index-list'>
        <li>
          <a href='#/index'><i className="fab fa-twitter"></i>Twitter</a>
        </li>

        <li>
          <a href='#/index'><i className="fab fa-github"></i>Github</a>
        </li>

        <li>
          <a href='#/index'><i className="fab fa-linkedin"></i>LinkedIn</a>
        </li>
      </div>
    </ul>
  );
};

export default SitesIndex;
