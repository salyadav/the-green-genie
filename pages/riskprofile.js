import QuestionCard from '../components/QuestionCard';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import riskQns from '../constants/riskprofiling';
import { useRiskContext } from '../context/AppContext';

export default function RiskProfile() {
    const [qnCount, setQnCount] = useState(0);
    const router = useRouter();
    const { riskData, setRiskData } = useRiskContext();
    
    const saveAnswers = (answer) => {
        const map = new Map(riskData);
        map.set(qnCount, answer);
        setRiskData(map);
    };

    return (
        <div className={styles.container}>
            <QuestionCard 
                qnCount={qnCount} 
                setQnCount={setQnCount} 
                data={riskQns}
                saveAnswers={saveAnswers}
                profile="risk"
            ></QuestionCard>
        </div>
    );
}
