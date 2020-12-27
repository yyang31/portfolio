import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Experience">Experience</Link></li>
        <li><Link to="/Project">Project</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;