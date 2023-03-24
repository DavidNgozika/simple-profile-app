import React from 'react'
import styles from './UsersList.module.css';

export default function UsersList({ users }) {
    return (
        <ul className={styles.container}>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name} {user.age}
                </li>
            ))}
        </ul>
    );
}
