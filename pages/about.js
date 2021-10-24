import styles from '../styles/Home.module.css'
import Button from "../components/Button";
import Image from "next/dist/client/image";

export default function About() {
  return (
      <div>
        <div className="static ...">

          <div className="static ...">
            <h1 className={styles.title}>
              <span className="flex justify-start ... font-bold ...">What is ESG?</span>
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
              <span className="flex justify-start ... font-bold ...">ESG = Environmental Social & Corporate Governance</span>
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div class="text-3xl ...">E</div>
            <div class="text-3xl ...">S</div>
            <div class="text-3xl ...">G</div>
            <div>
              <span>Carbon emissions, Air and water pollution, energy efficiency, Deforestation, renewable energy usage, relationship and history with environmental protection agencies </span>
            </div>
            <div>
              <span>People related elements concerning employees, customers, consumers, and supplier . Ex. Data protection and privacy, gender diversity, human rights, labor standards , employee treatment and turnover.</span>
            </div>
            <div>
              <span>Executive compensation, whistleblower schemes, board independence & diversity, anti corruption practices, stock structures, and communication transparency.</span>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <Image src="/public/esg_rating.png" width={600} height={500} />
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

      </div>

  )
};
