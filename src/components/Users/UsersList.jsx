import React from 'react'

export default function UsersList({ users }) {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name} {user.age}
                </li>
            ))}
        </ul>
    );
}
