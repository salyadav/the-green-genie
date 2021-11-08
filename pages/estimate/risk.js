
import Button from '../../components/Button'
import { useRiskContext } from '../../context/AppContext';
import styles from '../../styles/Home.module.css'
import { calculateRiskScore } from '../../constants/util';
import { useRouter } from 'next/router'

const riskInclination = [
    {
        type: "Conservative",
        description: `Seeking safety of capital, minimal risk and minimum or low returns`,
        claus: `* Possible Allocation - Equity: 0-10%; Debt and others: 90-100%`
    }, {
        type: "Moderate",
        description: `Looking for relatively higher returns over medium to long term with modest risk`,
        claus: `*Possible Allocation - Equity: 40-60%; Debt and others: 40-60%`
    }, {
        type: "Aggresive",
        description: `Willing to take significant risks to maximise returns over the long terms`,
        claus: `*Possible Allocation - Equity: 90-100%; Debt and others: 0-10%`
}
];

export default function Estimate() {
    const { riskData } = useRiskContext();
    const result = riskData ? calculateRiskScore(riskData) : 0;
    const riskTypeIndex = result < 70 ? 0 : result < 130 ? 1 : 2;
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
                }
                <div className='text-sm text-gray-500'>{riskInclination[riskTypeIndex].claus}</div>
                </div>
            </div>
            <div className= "flex flex-wrap justify-center mx-10">
                <Button onClick={() => {
                    router.push('../findmyifa')
                }}>Find my IFA</Button>
                <Button onClick={() => {
                    router.push('../stock-bundle')
                }}>Suggested stock bundle</Button>
                <Button onClick={() => {
                    router.push('../advisory')
                }}>Get Robo-Advisory</Button>
            </div>
        </main>
    )
};
  