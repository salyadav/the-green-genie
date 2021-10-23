import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Estimate() {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className="font-bold">Your ESG score</h1>
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="w-96">Total score</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td className="w-96">Environment</td>
                        <td>45</td>
                    </tr>
                    <tr>
                        <td className="w-96">Social</td>
                        <td>78</td>
                    </tr>
                    <tr>
                        <td className="w-96">Governance</td>
                        <td>89</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
          <Button onClick={() => window.location.href='/findmyifa'}>Find y</Button>
        </div>
    </div>
  )
}
