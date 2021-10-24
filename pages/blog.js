import styles from '../styles/Home.module.css'
import blogList from '../constants/blogs.js'
import podcastList from '../constants/podcasts.js'
import Image from 'next/Image'

const Card = ({data}) => {
  return (
      <div className={styles.card}>
        {/*<Image src="/profilepic.png" width={96} height={96} />*/}
        <h1><a href={data.link}><span className="font-bold text-green-600 text-lg">{data.headText}</span></a></h1>
        <div className="text-sm pt-4">
          <div><span className="font-bold">{data.text}</span></div>
          <div><span className="font-bold">{data.noOfEsgClients}</span></div>
        </div>
      </div>
  );
}

export default function FindArticles() {
  return (
      <main>
      <div className="bg-green-500 py-40">
        <h1 className={styles.title}>
          <span className="font-bold">Interested in learning more?</span>
          <div className="text-black-400 text-sm pl-4">Here's a curated list of resources for you.</div>
        </h1>
      </div>
          <div className="pb-20">
        <h1 className={styles.title}>
          <span className="font-bold">{"Articles"}</span>
          <Image src="/article.png" width={96} height={96}  />
        </h1>
      </div>
        <div>
          <div className="flex cursor-pointer">
            {
              blogList.map((val, ind) => (
                  <Card key={ind} data={val} />
              ))
            }
          </div>
        </div>
        <div className="pb-20">
          <h1 className={styles.title}>
            <span className="font-bold">{"Podcasts"}</span>
            <Image src="/mike.png" width={96} height={96} />
          </h1>
        </div>
        <div>
          <div className="flex cursor-pointer">
            {
              podcastList.map((val, ind) => (
                  <Card key={ind} data={val} />
              ))
            }
          </div>
        </div>
      </main>

  )
};
