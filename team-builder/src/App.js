import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import TeamInfo from './TeamInfo';

function App() {
  const [names, setNames] = useState([
    {
      id: 1,
      name: "Shazeen",
      email: "email@email.com",
      role: "Student"
    }
  ]);

  const NewTeamMember = (member) => {
    // console.log('member', member);
    const newMember = {
      id: Date.now,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setNames([...names, newMember]);
  };


  return (
    <div className="App">
      <h1>Team Names</h1>
      <TeamInfo NewTeamMember={NewTeamMember} name='Enter your name' email='Enter your email' role='select your role'/>
      <Form names={names}/>
    </div>
  );
}

export default App;
