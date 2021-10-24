import styles from '../styles/Home.module.css'
import ifaList from '../constants/myifa'
import Image from 'next/image'
import Button from "../components/Button";

const Card = ({data}) => {
    return (
        <div className={styles.card}>
            <Image src="/profilepic.png" width={96} height={96} />
          <h1><a href={data.link}><span className="font-bold text-green-600 text-lg">{data.name}</span></a></h1>
            <div className="text-sm text-gray-400 py-1">{data.email}</div>
            <div className="text-sm text-gray-500">{data.contact}</div>
            <div className="text-sm pt-4">
                <div>ESG Score: <span className="font-bold">{data.esgScore}</span></div>
                <div>No. of Clients: <span className="font-bold">{data.noOfEsgClients}</span></div>
            </div>
        </div>
    );
}

export default function FindIfa() {
  return (
      <main>
        <div>
          <div className="bg-green-500 py-20">
            <h1 className={styles.title}>
              <span className="font-bold">Our top matched IFAs for you</span>
            </h1>
            <div className="flex justify-center text-gray-800 text-3xl pl-4">Find your Genie!</div>
          </div>
            <div className="flex cursor-pointer">
                {
                    ifaList.map((val, ind) => (
                        <Card key={ind} data={val} />
                    ))
                }
            </div>
        </div>
        <div className= "flex justify-center">
            <Button onClick={() => window.location.href='/getstarted'}>Go Back</Button>
            <Button onClick={() => window.location.href='/blog'}>Resources</Button>
        </div>
      </main>
  )
};
