import React, {useState} from 'react';
import './App.css';

function TeamInfo(props) {
    // console.log('teamInfoProps', props);
    const [team, setTeam] = useState({name: props.name, email: props.email, role: props.role});

  //Set up onChange event when input text changes (similar to our onClick event used with buttons)
    const handleChanges = (event) => {
        console.log("changes", event.target.value);
        const newStateObj = { ...team, [event.target.name]: event.target.value };
        console.log("newStateObj", newStateObj);
        //Use text input value to update state
        setTeam(newStateObj);
        //Refactor inputs and handleChanges to use "name" in updating state
      };

    const submitForm = (event) => {
        event.preventDefault();
        props.NewTeamMember(team);
        setTeam({name: '', email: '', role: ''});
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" name='name' value={team.name} onChange={handleChanges} />
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" name='email' value={team.email} onChange={handleChanges} />
            <label htmlFor='role'>Role</label>
            <input id='role' type="text" name='role' value={team.role} onChange={handleChanges} />
            <button type='submit'>Submit</button>
        </form>
    )
}
export default TeamInfo;