import React from 'react'
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

export default function ErrorModal({ title, message, onConfirm }) {
    return (
        <>
            <div 
                className={styles.backdrop}
                onClick={onConfirm}
            />
            <Card className={styles.container}>
                <header>
                    <h2>{title}</h2>
                </header>

                <div>
                    <p>{message}</p>
                </div>

                <footer>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
}
