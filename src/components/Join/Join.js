import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      <h1 className="heading">WeChat</h1>
        <p className="heading1">The New way To Connect</p>
        <p className="heading2"style={{color: " rgb(92, 252, 0)",paddingBottom:"20px",fontSize:"20px"}}>Anytime.Anywhere.Anyone</p>
        <div>
          <input placeholder="UserName" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="RoomName" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit" style={{color:"rgb(92, 252, 0)"}}>Sign In</button>
        </Link>
      </div>
    </div>
  );
}
