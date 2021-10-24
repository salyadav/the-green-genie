import styles from '../styles/Home.module.css'
import Button from '../components/Button'

export default function GetStarted() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className="font-bold">What would you like to do first?</span>
      </h1>
      <div className="flex">
          <Button onClick={() => window.location.href='/about'}>Learn about ESG</Button>
          <Button onClick={() => window.location.href='/esgprofile'}>ESG Profiling</Button>
      </div>
    </div>
  )
};
