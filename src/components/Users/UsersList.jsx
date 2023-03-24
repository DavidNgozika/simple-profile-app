import React from 'react'
import Card from '../UI/Card';
import styles from './UsersList.module.css';

export default function UsersList({ users }) {
    return (
        <>
            <Card className={styles.container}>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.name} {user.age}
                        </li>
                    ))}
                </ul>
            </Card>
        </>
    );
}
