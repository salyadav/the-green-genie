
import Button from '../../components/Button'
import { useRiskContext } from '../../context/AppContext';
import styles from '../../styles/Home.module.css'
import { calculateRiskScore } from '/';
import { useRouter } from 'next/router'

const riskInclination = [
    {
        type: "Conservative",
        description: "I am Conservative."
    }, {
        type: "Moderate",
        description: "I am Moderate."
    }, {
        type: "Aggresive",
        description: "I am Aggresive."
    }
];

export default function Estimate() {
    const { riskData } = useRiskContext();
    const result = riskData ? calculateRiskScore(riskData) : 0;
    const riskTypeIndex = 0; //to change
    const router = useRouter();

    return (
        <main>
            <div className="bg-green-500 py-20">
                <h1 className={styles.title}>
                    <span className="font-bold">Risk Profile</span>
                </h1>
            </div>
            <div className= "m-auto w-screen text-center">
                <div className="py-10 font-bold text-2xl">{
                    riskInclination[riskTypeIndex].type
                }</div>
                <div className="p-10 mx-10 lg:mx-20 border rounded-md">{
                    riskInclination[riskTypeIndex].description
                }</div>
            </div>
            <div className= "flex flex-wrap justify-center mx-10">
                <Button onClick={() => {
                    router.push('../findmyifa')
                }}>Find my IFA</Button>
                <Button onClick={() => {
                    router.push('../bundle')
                }}>Suggest stock bundle</Button>
                <Button onClick={() => {
                    router.push('../advisory')
                }}>Get Robo-Advisory</Button>
                </div>
        </main>
    )
};
  