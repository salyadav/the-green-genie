import styles from '../styles/Home.module.css'
import Button from "../components/Button";
import Image from "next/dist/client/image";

export default function About() {
  return (
    <main className="text-gray-700">
      <div className="bg-green-500 py-40">
        <h1 className={styles.title}>
          <span className="font-bold">What is ESG?</span>
        </h1>
      </div>
      <p className="p-20 text-2xl leading-loose">
        ESG data is categorised as “non-accounting” information as it helps in capturing valuation of the intangible assets of a company. It measures the decisions taken by the company that affects their operational efficiency and future strategic decisions.
      </p>
      <div className="pb-20">
        <h1 className={styles.title}>
          <span className="font-bold">{"ESG = Environmental Social & Corporate Governance"}</span>
        </h1>
      </div>
      <div className={styles.title}>
        <Image src="/esg_rating.webp" width={500} height={500} />
        <div><a href="https://www.theprivateoffice.com/investing/what-is-esg-investing"><span className="text-sm text-gray-400 underline">source: theprivateoffice</span></a></div>
      </div>
      <div className="bg-green-500 py-40 mt-10">
        <h1 className={styles.title}>
          <span className="font-bold">What is ESG investing?</span>
        </h1>
      </div>
        <p className="p-20 text-2xl leading-loose">
          ESG investing aims to go beyond the pure financials of the businesses and
          develop a more holistic view of the company’s operations, management quality
          and overall impact on society. Accordingly, it is concerned with how companies
          manage the ESG risks they face, and the sustainability of a company’s profit,
          rather than keeping the sole focus on financial metrics.
        </p>
      <div className="flex gap-5 px-20 pb-20">
        <div className="w-1/3 pr-10">
          <h1 className="text-3xl font-bold py-10">
            Equifax Data Breach
          </h1>
          <div className="leading-snug text-lg">
            A year before Equifax disclosed a data breach it scored a
            <span className="font-bold text-red-500"> ZERO </span> (lowest) on privacy and data security.
          </div>
          <a href="" className="text-sm text-gray-400 py-2 underline">Resource: MSCI</a>
        </div>
        <Image src="/equifax_fall.png" width={1000} height={500} />
      </div>
      <div className="flex gap-5 px-20 pb-20">
        <div>
          <Image src="/global_risk.png" width={1000} height={500} />
          <div className="text-gray-400 text-sm underline pl-4">Source: Kotak India</div>
        </div>
        <div className="w-1/3 pr-10">
          <h1 className="text-3xl font-bold py-5">
            <span className="justify-start font-bold">Why is ESG investing important?</span>
          </h1>
          <div className="leading-snug text-lg">Risks to investments are no more related to just economic issues. In the past 10 years,  11 out of 55 (20%) global issues were Economic in nature, the rest pertained to ESG risks.</div>
        </div>
      </div>
      <div className="flex gap-5 px-20 pb-20">
        <div className="w-1/3 pr-10">
          <h1 className="text-3xl font-bold py-10">
            ESG Creates Value
          </h1>
          <div className="leading-snug text-lg">
            <ul className="list-disc">
              <li>Early recognition/awareness of sustainable megatrends can help tap into new markets and create sustainable product lines.</li>
              <li>Better capital allocation policies.</li>
              <li>Efficient utilization of resources to possibly lower operational costs.</li>
              <li>Increased employee productivity through better labor relations.</li>
              <li>Reduced risk of fines/penalties related to climate issues.</li>
            </ul>
          </div>
        </div>
        <Image src="/create_value.png" width={1000} height={500} />
      </div>
      <div className="bg-green-500 py-40">
        <h1 className={styles.title}>
          <span className="font-bold">ESG investment is here to stay</span>
        </h1>
      </div>
      <div className="flex gap-5 px-20 pb-20">
        <div className="w-1/3 pr-10">
          <h1 className="text-3xl font-bold py-10">
            More investors are moving towards ESG initiatives
          </h1>
          <div className="leading-snug text-lg">
           A survey conducted by Investopedia found that more than 500 investors plan to plan to invest more in companies with strong ESG initiatives over the next five years.
          </div>
          <a href="" className="text-sm text-gray-400 py-2 underline">Resource: Investopedia</a>
        </div>
        <div class="pl-60 ...">
        <Image src="/show_trend.png" width={700} height={500} />
        </div>
      </div>
      <div className="flex gap-5 px-20 pb-20">
        <div class="pr-40 ...">
          <Image src="/milennials.png" width={800} height={500} />
          <div className="text-gray-400 text-sm underline pl-4">Source: Investopedia</div>
        </div>
        <div className="w-1/3 pr-10">
          <h1 className="text-3xl font-bold py-5">
            <span className="justify-start font-bold">Millennial investors believe ESG is the new standard</span>
          </h1>
          <div className="leading-snug text-lg">Most millennials incorporate environmental, social, and governance (ESG) criteria into their investment decisions as they believe it is a profitable strategy.</div>
        </div>
      </div>
      <div className="pb-20 flex justify-center">
        <Button onClick={() => window.location.href='/esgprofile'}>Get ESG Profiling</Button>
      </div>
    </main>
  )
};
