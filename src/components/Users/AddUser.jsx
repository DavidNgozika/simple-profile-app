import React, { useState } from 'react'
import styles from './AddUser.module.css';

export default function AddUser({ onAddUser }) {
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
        onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    return (
        <form onSubmit={submitHandler} className={styles.container}>
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
            <button className={styles.button}>Submit</button>
        </form>
    );
}
