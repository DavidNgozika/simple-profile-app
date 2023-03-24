import React, { useState } from 'react'
import Card from '../UI/Card';
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
        <Card className={styles.container}>    
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
                <button className={styles.button}>Submit</button>
            </form>
        </Card>
    );
}
