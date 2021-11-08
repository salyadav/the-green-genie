import styles from '../styles/Home.module.css'
import { Breadcrumb } from '../components/Button'
import { useRouter } from 'next/router'
export default function Investment() {
  const router = useRouter();

  return (
    <main>
      <div className="bg-green-500 py-20">
        <h1 className={styles.title}>
          <span className="font-bold">Discover Bundles</span>
        </h1>
      </div>
      <div className='flex flex-wrap'>
        <div className='border rounded-lg p-5 m-5 w-1/3 cursor-pointer hover:bg-gray-100'>
          <div className='px-2 text-2xl font-bold pb-2'>{'Automobile'}</div>
          <Breadcrumb onClick={null} selected>Low Volatality</Breadcrumb>
          <div className='p-2 text-md font-bold'>About the bundle:</div>
          <div className='px-2 text-sm'>{`This bundle invests in automobile companies developing electric cars, fixing the weights to 70% and 30%. 
        Bundle invests in large-cap stocks using Direxion.
        `}</div>
          <div className="flex justify-between px-2 py-4">
            <div className='text-gray-500'>Min Amount: <span className='text-green-600 font-bold'>$125</span></div>
            <div className='text-gray-500'>3Y CGAR: <span className='text-green-600 font-bold'>45.32%</span></div>
          </div>
          <div className='text-blue-500'>#elonmusk #tesla</div>
        </div>
        <div className='border rounded-lg p-5 m-5 w-1/3 cursor-pointer hover:bg-gray-100'>
          <div className='px-2 text-2xl font-bold pb-2'>{'Pharma'}</div>
          <Breadcrumb onClick={null} selected>Low Volatality</Breadcrumb>
          <div className='p-2 text-md font-bold'>About the bundle:</div>
          <div className='px-2 text-sm'>{`This bundle invests in pharmaceutical companies researching in covid vaccines, fixing the weights to 70% and 30%. 
        Bundle invests in large-cap stocks using Direxion.
        `}</div>
          <div className="flex justify-between px-2 py-4">
            <div className='text-gray-500'>Min Amount: <span className='text-green-600 font-bold'>$125</span></div>
            <div className='text-gray-500'>3Y CGAR: <span className='text-green-600 font-bold'>20.67%</span></div>
          </div>
          <div className='text-blue-500'>#metabiome #covid19</div>
        </div>
      </div>
    </main>
  )
};
