import React, {useState} from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [names, setNames] = useState([
    {
      id: 1,
      name: "Shazeen",
      email: "Fabius",
      role: "Student"
    }
  ]);
  return (
    <div className="App">
      <h1>Team Names</h1>
      <Form names={names}/>
    </div>
  );
}

export default App;
