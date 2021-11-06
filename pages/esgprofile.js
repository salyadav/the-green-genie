import QuestionCard from '../components/QuestionCard';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import esgQns from '../constants/esgprofiling';
import { useEsgContext } from '../context/AppContext';

export default function EsgProfile() {
    const [qnCount, setQnCount] = useState(0);
    const router = useRouter();
    const { esgData, setEsgData } = useEsgContext();
    
    const saveAnswers = (answer) => {
        const map = new Map(esgData);
        map.set(qnCount, answer);
        setEsgData(map);
    };

    return (
        <div className={styles.container}>
            <QuestionCard 
                qnCount={qnCount} 
                setQnCount={setQnCount} 
                data={esgQns}
                saveAnswers={saveAnswers}
                profile="esg"
                ></QuestionCard>
        </div>
    );
}

