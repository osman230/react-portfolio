import React from 'react';
import profilePic from "../../assets/Profile/profilePic.jpg";

function Nav() {

  return (
<header>
  <nav>
    <ul className="flex-row">
    <li className="mx-2">
        <a href="#Resume">
          Resume
        </a>
      </li>
      <li className="mx-2">
        <a href="#Portfolio">
          Portfolio
        </a>
      </li>
    </ul>
  </nav>
  <div className='profilePic'>
  <img src={profilePic} className="my-2" style={{ width: "10%" }} alt="profile" />
  </div>
</header>
  );
}


export default Nav;