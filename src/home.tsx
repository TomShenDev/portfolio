import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const position = ["software engineer", "web developer", "game developer"];
const language = ["Python", "Java", "Javascript", "SQL", ".NET"]
const skills = ["Pytorch", "Django", "Pygame", "Spring", "Flutter", "Sling Models", "React", "Node.js", "Angular", "MySQL", "NoSQL", "SQLite", "Unity", "Game Design", "3D Modeling"]

function Home() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  /*
  let i0 = Math.floor(seconds % 15 / 5);
  let i1 = Math.floor(seconds % 15 / 3);
  let i2 = Math.floor(seconds % 15);
  */
 let i0 = 0, i1 = 0, i2 = 0;

  return (
    <div className="home">
      <div className="intro">
        <div><span>Hi I am Tom.</span></div>
        <div><span>I am a {position[i0]}.</span></div>
        <div><span>I code {language[i1]}.</span></div>
        <div><span>I shine at {skills[i2]}.</span></div>
      </div>
    </div>
  );
}

export default Home;
