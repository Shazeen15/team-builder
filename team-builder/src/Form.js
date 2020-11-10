import React from 'react';
import './App.css';


function Form(props) {
    const {names} = props;
    // console.log('formNames', names);
    return (
        <div className='formcard'>
            <h1>Form</h1>
            {names.map((names) => (
                    <div key={names.id} className='teamNames'>
                        <p>{names.name}</p>
                        <p>{names.email}</p>
                        <p>{names.role}</p>
                    </div>
            ))}
        </div>
    );
}

export default Form;