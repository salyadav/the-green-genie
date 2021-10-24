import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import stockList from '../constants/stocks'

export default function GetStarted() {
  return (
      <main>
        <div className="bg-green-500 py-40">
          <h1 className={styles.title}>
            <span className="font-bold">Investment Breakdown</span>
          </h1>
        </div>
        <div>
          <div>
            <h1 className={styles.title}>
              <div className="flex justify-start font-medium pl-20 pt-12 ... ">NFLX
                <span className="pl-8"> $<span className="text-green-500">664.78</span></span>
              </div>
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-10">
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 0.1 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Environment Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 6.8 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Sustainability Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 9.9 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Governance Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 17 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Total Score
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className={styles.title}>
              <div className="flex justify-start font-medium pl-20 pt-12 ... ">AMZN
                <span className="pl-8"> $<span className="text-red-500">3,3355.55</span></span>
              </div>
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-10">
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 6.7 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Environment Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 14.6 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Sustainability Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-green-500"> 9.7 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Governance Score
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-center ... text-7xl">
                <span className="font-bold text-yellow-500"> 31 </span>
              </div>
              <div className="flex justify-center ... font-bold text-3xl">
                Total Score
              </div>
            </div>
          </div>
        </div>
        <div className= "flex justify-center">
          <Button onClick={() => window.location.href='/estimate'}>Go Back</Button>
          <Button onClick={() => window.location.href='/findmyifa'}>Find my IFA</Button>
        </div>
      </main>
  )
};
