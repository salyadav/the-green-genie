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
        <div className="w-1/2">
            <h1 className="text-2xl py-10 font-bold text-green-700">
                {esgQns[qnCount].question}
            </h1>
            <div>
                <input className="border p-5 w-full text-xl border rounded-lg" onChange={(e) => setAns(e.target.value)}></input>
            </div>
            <div className="flex justify-between">
                {qnCount > 0 ? <Button type="hollow" onClick={() => {
                    if (qnCount > 0) {
                        setAns('');
                        setQnCount(qnCount - 1);
                    } else {

                    }
                }}>Back</Button> : null}
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