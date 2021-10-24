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
              <br></br>
              <span className="font-bold">Nike</span><span> has a chief sustainability officer overseeing their environmental efforts. Its Flyknit & Flyleather were developed in an environmentally sustainable way. Nike signed onto a coalition of companies called RE100, vowing to source 100% renewable energy across its operations by 2025. </span>
            </div>
            <div>
              <span>People related elements concerning employees, customers, consumers, and supplier . Ex. Data protection and privacy, gender diversity, human rights, labor standards , employee treatment and turnover.</span>
              <br></br>
              <span className="font-bold">Accenture </span><span> with its close attention to diversity and inclusion in its workforce earned a spot on Fortune's list of Best Companies to Work For for 11 years. The company aims to have a 50:50 workplace gender ratio by the end of 2025 & also having at least 25% female managing directors.</span>
            </div>
            <div>
              <span>Executive compensation, whistleblower schemes, board independence & diversity, anti corruption practices, stock structures, and communication transparency.</span>
              <br></br>
              <span className="font-bold">Intuit </span><span> shows accountability by tying its executives' incentive compensation to revenue and non-GAAP (Generally Accepted Accounting Principles) operating income, as well as to the company's overall performance on annual goals related to employees, customers, partners, and stockholders. </span>
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
