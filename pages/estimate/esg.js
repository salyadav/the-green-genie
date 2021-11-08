
import Button from '../../components/Button'
import { useEsgContext } from '../../context/AppContext';
import styles from '../../styles/Home.module.css'
import calculateEsgScore from '/';
import { useRouter } from 'next/router'

export default function Estimate() {
    const { esgData } = useEsgContext();
    const result = esgData ? calculateEsgScore(esgData) : null;
    const total = result ? result.e + result.s + result.g : 0;
    const router = useRouter();
  
    return (
        <main>
          <div className="bg-green-500 py-20">
            <h1 className={styles.title}>
              <span className="font-bold">Your Score Breakdown</span>
            </h1>
            <div className="flex justify-center text-gray-800 text-3xl pl-4">The lower, the better.</div>
          </div>
          <div className="grid grid-cols-4 gap-10">
            <div className="pt-20">
              <div className="flex justify-center text-7xl">
                <span className="font-bold text-green-500"> {result ? result.e : 0} </span>
              </div>
              <div className="flex justify-center font-bold text-3xl">
                Environment Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center text-7xl">
                <span className="font-bold text-green-500"> {result ? result.s : 0} </span>
              </div>
              <div className="flex justify-center font-bold text-3xl">
                Sustainability Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center text-7xl">
                <span className="font-bold text-green-500"> {result ? result.g : 0} </span>
              </div>
              <div className="flex justify-center font-bold text-3xl">
                Governance Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center text-7xl">
                <span className="font-bold text-yellow-500">{total} </span>
              </div>
              <div className="flex justify-center font-bold text-3xl">
                Total Score
              </div>
            </div>
          </div>
          <div className= "flex justify-center pt-20">
            <Button onClick={() => {
              router.push('/investment')
            }}>Investment breakdown</Button>
            <Button onClick={() => {
              router.push('/findmyifa')
            }}>Find my IFA</Button>
          </div>
        </main>
    )
  };
  