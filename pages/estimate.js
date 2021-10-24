import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import { useAppContext } from '../context/AppContext';

export default function Estimate() {
  const { esgData } = useAppContext();
  console.log(esgData);
  return (
      <main>
        <div className="bg-green-500 py-40">
          <h1 className={styles.title}>
            <span className="font-bold">Your Score Breakdown</span>
            <div className="text-black-400 text-md pl-4">The lower, the better.</div>
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="pt-20">
            <div className="flex justify-center ... text-7xl">
              <span className="font-bold text-green-500"> 10 </span>
            </div>
            <div className="flex justify-center ... font-bold text-3xl">
              Environment Score
            </div>
          </div>
          <div className="pt-20">
            <div className="flex justify-center ... text-7xl">
              <span className="font-bold text-green-500"> 10 </span>
            </div>
            <div className="flex justify-center ... font-bold text-3xl">
              Sustainability Score
            </div>
          </div>
          <div className="pt-20">
            <div className="flex justify-center ... text-7xl">
              <span className="font-bold text-green-500"> 10 </span>
            </div>
            <div className="flex justify-center ... font-bold text-3xl">
              Governance Score
            </div>
          </div>
          <div className="pt-20">
            <div className="flex justify-center ... text-7xl">
              <span className="font-bold text-yellow-500"> 30 </span>
            </div>
            <div className="flex justify-center ... font-bold text-3xl">
              Total Score
            </div>
          </div>
        </div>
        <div className= "flex justify-center pt-20">
          <Button onClick={() => window.location.href='/investment'}>Investment breakdown</Button>
          <Button onClick={() => window.location.href='/findmyifa'}>Find my IFA</Button>
        </div>
      </main>
  )
}
