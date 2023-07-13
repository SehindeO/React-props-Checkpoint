import './App.css';
import Profile from './Profile/Profile';

import Ciromarr from "./Assets/Ciromarr.jpeg"


function App() {
  
  return (
    <div style={{backgroundColor:"lightblue", width:"70%", margin: "auto", border: "1px solid black", padding:"10px"}}>
      <h1 style={{textAlign: "center"}}>
      React Props Checkpoint
      </h1>
      <Profile fullName={"Olasehinde Oduntan Odesina"} 
      bio= {"An Interactive, Business Analyst, Full-stack software development expertise. Focus on building scalable, problem-solving platforms that are user-friendly. A Member of MANES ICEBORN (LAF3FS) Nigeria Hackerspace. I started my professional career with MTN Nigeria, later Joined Logitrade Engineering Limited (LE)"
} profession= "Business Consultant"
        img src="" alt="Olasehinde" style={{width: "50%", marginLeft: 250}}
        />
      
    </div>
  );
}

export default App;
