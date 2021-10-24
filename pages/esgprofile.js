import QuestionCard from '../components/QuestionCard'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function EsgProfile() {
    const [qnCount, setQnCount] = useState(0);

    return (
        <div className={styles.container}>
            <QuestionCard 
                qnCount={qnCount} 
                setQnCount={setQnCount} 
            ></QuestionCard>
        </div>
    );
}

