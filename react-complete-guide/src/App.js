import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {
    const [ personState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: "28" },
            { name: "Holi", age: "29" },
            { name: "Holi2", age: "1" },
        ],
        otherstate: "some other value"
    });


    return (
            <div className="App">
            <h1>Hi im a react app</h1>
            <p>This is really working!!!</p>
            <button onClick={this.switchNameHandler}>Boton</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age} />
            <Person name={personState.persons[1].name} age={personState.persons[1].age} />
            <Person name={personState.persons[2].name} age={personState.persons[2].age} >My Hobbies: Racing</Person>
            </div>
    );
    
}
export default app;
