import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 style={{color:"rgb(90, 250, 0)"}}>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h3>Open in Another tab, To Enjoy Real Time Fun :)</h3>
    </div>
    {
      users
        ? (
          <div>
            <h1 style={{color:"rgb(90, 250, 0)"}}>People Currently Chatting:</h1>
            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;