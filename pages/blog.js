import styles from '../styles/Home.module.css'
import blogList from '../constants/blogs.js'
import podcastList from '../constants/podcasts.js'
import Button from '../components/Button'

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
          </h1>
          <div className="text-black-400 flex justify-center text-2xl pl-4">Here's a curated list of resources for you.</div>
        </div>
        <div className=" flex justify-center pb-10 pt-10">
          <div>
          <h1 className={styles.title}>
            <span className="font-bold pt-20">{"Blogs"}</span>
          </h1>
          </div>
            {/*<div className="pl-10 ... ">*/}
              {/*<Image src="/article.png" width={96} height={96} />*/}
            {/*</div>*/}
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
        <div className=" flex justify-center pb-10 pt-10">
          <div>
            <h1 className={styles.title}>
              <span className="pt-96 font-bold">{"Podcasts"}</span>
            </h1>
          </div>
          {/*<div>*/}
            {/*<Image src="/mike.png" width={96} height={96} />*/}
          {/*</div>*/}
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
