import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import { useAppContext } from '../context/AppContext';

export default function Estimate() {
    const { esgData } = useAppContext();
    console.log(esgData);
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className="font-bold text-2xl py-2">Your ESG score</h1>
                <table className="table-auto text-xl">
                    <tbody>
                        <tr>
                            <td className="w-96">Total score</td>
                            <td className="font-bold">80</td>
                        </tr>
                        <tr>
                            <td className="w-96">Environment</td>
                            <td className="font-bold">45</td>
                        </tr>
                        <tr>
                            <td className="w-96">Social</td>
                            <td className="font-bold">78</td>
                        </tr>
                        <tr>
                            <td className="w-96">Governance</td>
                            <td className="font-bold">89</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
            <Button type="hollow" onClick={() => window.location.href='/findmyifa'}>Investment breakdown</Button>
            <Button onClick={() => window.location.href='/findmyifa'}>Find my IFA</Button>
            </div>
        </div>
    )
}
