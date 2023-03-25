import React from 'react'
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

export default function ErrorModal({ title, message }) {
    return (
        <>
            <div 
                className={styles.backdrop}
            />
            <Card className={styles.container}>
                <header>
                    <h2>{title}An Error has occurred!</h2>
                </header>

                <div>
                    <p>{message}Please enter a valid input.</p>
                </div>

                <footer>
                    <Button>Okay</Button>
                </footer>
            </Card>
        </>
    );
}
