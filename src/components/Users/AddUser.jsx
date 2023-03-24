import React from 'react'

export default function AddUser() {
    return (
        <form>
            <label htmlFor='username'>Username:</label>
            <input 
                id='username' 
                type="text" 
            />

            <label htmlFor='age'>Age:</label>
            <input 
                id='age' 
                type="text" 
            />
        </form>
    );
}
