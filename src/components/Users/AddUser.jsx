import React, { useState } from 'react'

export default function AddUser() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const inputChangeHandler = e => {
        setUsername(e.target.value);
    };

    const ageChangeHandler = e => {
        setAge(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(username, age);
        setUsername('');
        setAge('');
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='username'>Username:</label>
            <input 
                id='username' 
                type="text" 
                value={username}
                onChange={inputChangeHandler}
            />

            <label htmlFor='age'>Age:</label>
            <input 
                id='age' 
                type="text" 
                value={age}
                onChange={ageChangeHandler}
            />
            <button>Submit</button>
        </form>
    );
}
