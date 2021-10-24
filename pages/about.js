import styles from '../styles/Home.module.css'
import Button from "../components/Button";
import Image from "next/dist/client/image";

export default function About() {
  return (
      <div>
        <div className="static ...">

          <div className="static ...">
            <h1 className={styles.title}>
              <span className="font-bold ...">What is ESG?</span>
            </h1></div>
          <div className="inline-block ...">
            <p>
              <span>
                ESG data is categorised as “non-accounting” information as it helps in capturing valuation of the intangible assets of a company. It measures the decisions taken by the company that affects their operational efficiency and future strategic decisions.
              </span>
            </p></div>

        </div>
        <div className="static ...">

          <div className="static ...">
            <h1 className={styles.title}>
              <span className="font-bold ...">ESG = Environmental Social & Corporate Governance</span>
            </h1>
          </div>

        </div>
        <div className={styles.title}>
          <Image src="/../public/esg_rating.png" width={600} height={500} />
        </div>
        <div className="static ...">
          <h1 className={styles.title}>
            <span className="flex justify-start ... font-bold ...">What is ESG investing?</span>
          </h1></div>
        <div className="inline-block ...">
          <p>
              <span>
                “ESG investing aims to go beyond the pure financials of the businesses and develop a more holistic view of the company’s operations, management quality and overall impact on society. Accordingly, it is concerned with how companies manage the ESG risks they face, and the sustainability of a company’s profit, rather than keeping the sole focus on financial metrics.”
              </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="static ... h-48 flex flex-wrap content-center ... ">
            <h1 className={styles.title}>
              <span className="font-bold ...">Equifax Data Breach</span>
            </h1>
            <span> A year before Equifax disclosed a data breach it scored a 0 on privacy and data security.</span>
          </div>
          <div className={styles.title}>
            <Image src="/../public/equifax_fall.png" width={1000} height={500} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className={styles.title}>
            <Image src="/../public/global_risk.png" width={1000} height={400} />
          </div>
          <div>
            <h1 className={styles.title}>
              <span className="justify-start ... font-bold ...">Why is ESG investing important?</span>
            </h1>
            <span> Risks to investments are no more related to just economic issues. In the past 10 years,  11 out of 55 (20%) global issues are Economic in nature, the rest pertain to ESG risks</span>
          </div>
        </div>

      </div>

  )
};
