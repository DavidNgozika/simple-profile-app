import React from 'react'
import styles from './Button.module.css';

export default function Button({ children, type, onClick }) {
    return (
        <button 
            className={styles.button} 
            type={type || 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
