import React, { useState } from "react";
import Button, { Breadcrumb } from './Button';
import esgQns from '../constants/esgprofiling';
import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/router'

const QuestionCard = ({ qnCount, setQnCount }) => {
    const [ans, setAns] = useState('');
    const [selectedBreadcrumb, setSelectedBreadcrumb] = useState(-1);
    const { esgData, setEsgData } = useAppContext();
    const router = useRouter();

    const saveAnswers = (answer) => {
        const map = new Map(esgData);
        map.set(qnCount, answer);
        setEsgData(map);
    };

    const current = esgQns[qnCount];

    const resetValues = () => {
        setAns("");
        setSelectedBreadcrumb(-1);
    }

    return (
        <div className="w-1/2">
            <h1 className="text-2xl py-10 font-bold text-green-700">
                {current.question}
            </h1>
            {
                current.options ? <div>
                    {
                        current.options.map((val, ind) => (
                            <Breadcrumb selected={ind == selectedBreadcrumb} key={ind} onClick={() => {
                                setAns(ind);
                                setSelectedBreadcrumb(ind);
                            }}>{val}</Breadcrumb>
                        ))
                    }
                </div> :
                    <input type="text" className="border p-5 w-full text-xl border rounded-lg" value={ans} onChange={(e) => setAns(e.target.value)}></input>
            }
            <div className="flex justify-between">
                {qnCount > 0 ? <Button type="hollow" onClick={() => {
                    resetValues();
                    setQnCount(qnCount => qnCount - 1);
                }}>Back</Button> : null}
                <Button onClick={() => {
                    if (qnCount < esgQns.length - 1) {
                        saveAnswers(ans);
                        resetValues();
                        setQnCount(qnCount => qnCount + 1);
                    } else {
                        // window.location.href = '/estimate'
                        router.push('/estimate')
                    }
                }}>{qnCount < esgQns.length - 1 ? "Next" : "Estimate"}</Button>
            </div>
        </div>
    )
};

export default QuestionCard;