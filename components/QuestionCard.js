import React, { useCallback, useState } from "react";
import Button from './Button';
import esgQns from '../constants/esgprofiling'

const QuestionCard = ({ qnCount, setQnCount, esgData, setEsgData }) => {
    const [ans, setAns] = useState('');
    const saveAnswers = useCallback((answer) => {
        const map = new Map(esgData);
        map.set(qnCount, answer);
        setEsgData(map);
    }, [setEsgData]);
    return (
        <div>
            <h1>
                {esgQns[qnCount].question}
            </h1>
            <div>
                <input className="border p-5 w-96 text-xl" onChange={(e) => setAns(e.target.value)}></input>
            </div>
            <div>
                <Button type="hollow" onClick={() => {
                    if (qnCount > 0) {
                        setAns('');
                        setQnCount(qnCount - 1);
                    } else {
                        
                    }
                }}>Back</Button>
                <Button onClick={() => {
                    if (qnCount < esgQns.length - 1) {
                        saveAnswers(ans);
                        setAns('');
                        setQnCount(qnCount + 1);
                    } else {
                        window.location.href = '/estimate'
                    }
                }}>{qnCount < esgQns.length - 1 ? "Next" : "Estimate"}</Button>
            </div>
        </div>
    )
};

export default QuestionCard;