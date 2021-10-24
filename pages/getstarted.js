import styles from '../styles/Home.module.css'
import Button from '../components/Button'

export default function GetStarted() {
  return (
    <div className={styles.container}>
        <div className="flex">
            <Button onClick={() => window.location.href='/esgprofile'}>Learn about ESG</Button>
            <Button onClick={() => window.location.href='/esgprofile'}>ESG Profiling</Button>
            <Button onClick={() => window.location.href='/esgprofile'}>ESG Profiling</Button>
        </div>
    </div>
  )
};
