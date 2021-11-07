import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import { useRouter } from 'next/router'
import { useEsgContext } from '../context/AppContext';
import { useEffect, useState } from 'react';

export default function Investment() {
  const router = useRouter();
  const { esgData, setEsgData } = useEsgContext();

  const [listOfCompanies, setListOfCompanies] = useState([]);
  useEffect(() => {
    setListOfCompanies(esgData?.get(0).split(','));
    if (listOfCompanies?.length) {
      console.log(listOfCompanies);
    }
  }, [esgData]);

  return (
    <main>
      <div className="bg-green-500 py-20">
        <h1 className={styles.title}>
          <span className="font-bold">Investment Breakdown</span>
        </h1>
      </div>
      <div className='flex justify-between'>
        <Component data={listOfCompanies} />
        <Similar />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mx-10">
          <Button onClick={() => {
            router.push('findmyifa')
          }}>Find my IFA</Button>
          <Button onClick={() => {
            router.push('stock-bundle')
          }}>Suggest stock bundle</Button>
          <Button onClick={() => {
            router.push('advisory')
          }}>Get Robo-Advisory</Button>
        </div></div>
    </main>
  )
};

const Similar = () => {
  return (
    <div className='border border-gray-400 rounded-md p-2 w-1/4 m-5'>
      <h2 className='text-2xl font-bold mb-2'>Similar</h2>
      <div className='flex justify-between my-2'>
        <div className=''>MSFT: 13</div>
        <Suggestion type='i' />
      </div>
      <div className='flex justify-between my-2'>
        <div className=''>AMZN: 31</div>
        <Suggestion type='d' />
      </div>
      <div className='flex justify-between my-2'>
        <div className=''>EBAY: 17</div>
        <Suggestion type='i' />
      </div>
    </div>
  );
};

const Title = ({ title, score }) => (
  <div>
    < div className="flex justify-center text-lg text-gray-800">
      {title}
    </div>
    <div className="flex justify-center text-2xl font-bold text-green-500">
      {score}
    </div>
  </div>
);

const Suggestion = ({ type }) => {
  const color = type == 'i' ? "bg-green-600" : "bg-red-400";
  return (
    <div className={"py-2 px-10 text-sm font-bold text-gray-200 rounded-md " + color}>{
      type == 'i' ? "Invest" : "Divest"
    }</div>
  )
};

const Component = ({ data }) => {
  return (
    <div className="mx-5 w-3/4 my-5">
      <div className="flex justify-between text-2xl font-medium m-5">
        <div> NFLX <span className='text-green-500'>$664.78</span></div>
        <Suggestion type='i' />
      </div>
      <div className="grid grid-cols-4 gap-10">
        <Title title="Environment Score" score="0.1" />
        <Title title="Sustainable Score" score="6.8" />
        <Title title="Governance Score" score="9.9" />
        <Title title="Total ESG Score" score="17" />
      </div>
      <div className="flex justify-between text-2xl font-medium m-5 mt-10">
        <div> DISCA <span className='text-green-500'>$26.52</span></div>
        <Suggestion type='d' />
      </div>
      <div className="grid grid-cols-4 gap-10">
        <Title title="Environment Score" score="0.1" />
        <Title title="Sustainable Score" score="8.8" />
        <Title title="Governance Score" score="8.3" />
        <Title title="Total ESG Score" score="17" />
      </div>
    </div>
  )
}
