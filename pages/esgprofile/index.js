import QuestionCard from '../../components/QuestionCard';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function EsgProfile() {
    const [qnCount, setQnCount] = useState(0);
    const router = useRouter();

    return (
        <div className={styles.container}>
            <QuestionCard 
                qnCount={qnCount} 
                setQnCount={setQnCount} 
            ></QuestionCard>
        </div>
    );
}

