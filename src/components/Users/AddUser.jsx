import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

export default function AddUser({ onAddUser }) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const inputChangeHandler = e => {
        setUsername(e.target.value);
    };

    const ageChangeHandler = e => {
        setAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    const submitHandler = e => {
        e.preventDefault();
        if (username.trim().length === 0 ||
            age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0)',
            });
            return;
        }

        onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    return (
        <>
            {
                error &&
                <ErrorModal 
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
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
