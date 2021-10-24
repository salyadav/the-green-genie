import QuestionCard from '../components/QuestionCard'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function EsgProfile() {
    const [esgData, setEsgData] = useState(null);
    const [qnCount, setQnCount] = useState(0); 
    return (
        <div className={styles.container}>
            <QuestionCard esgData={esgData} setEsgData={setEsgData}></QuestionCard>
        </div>
    );
}
