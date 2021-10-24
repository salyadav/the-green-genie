import styles from '../styles/Home.module.css'
import ifaList from '../constants/myifa'
import Image from 'next/Image'

const Card = ({data}) => {
    return (
        <div className={styles.card}>
            <Image src="/profilepic.png" width={96} height={96} />
            <h1 className="font-bold text-green-600 text-lg">{data.name}</h1>
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
    <div className={styles.container}>
        <h1 className="text-4xl font-bold my-10">Our top matched IFAs for you</h1>
        <div className="flex cursor-pointer">
            {
                ifaList.map((val, ind) => (
                    <Card key={ind} data={val} />
                ))
            }
        </div>
    </div>
  )
};
