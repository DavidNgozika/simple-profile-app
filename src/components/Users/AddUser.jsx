import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
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
        if (username.trim().length === 0 ||
            age.trim().length === 0) {
            return;
        }

        if (+age < 1) {
            return;
        }

        onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    return (
        <>
            <ErrorModal />
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
                    <Button type='submit'>Submit</Button>
                </form>
            </Card>
        </>
    );
}
