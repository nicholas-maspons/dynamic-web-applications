import styles from './StatsPage.module.scss'
import {useSelector} from 'react-redux'
import { useContext } from "react";
import { AppContext } from "../App"

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x
    LinearScale, // y
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement
)

function StatsPage () {

    const app_state = useContext(AppContext);

    const userData = useSelector((state) => state.user)
    // console.log(userData)
    const history = [...userData.history, userData.curr]

    const data = {
        labels: ['12/3', '12/4', '12/5', '12/6', '12/7', '12/8', '12/9'],
        datasets: [{
            label: 'Water Intake (ml)',
            data: history,
            backgroundColor: '#0E87CC',  // color of dot
            borderColor: 'black', // color of line
            pointBorderColor: '#0E87CC', // color of dot border
            tension: 0.1
        },
        {
            label: 'Goal (ml)',
            data: [userData.goal, userData.goal, userData.goal, userData.goal, userData.goal, userData.goal, userData.goal], // this is so stupid omg. temporary hopefully i dont forget
            backgroundColor: '#0E87CC',  // color of dot
            borderColor: '#0E87CC', // color of line
            pointBorderColor: '#0E87CC', // color of dot border
            // tension: 0.9
        }
    ]
    }
    const options = {
        scales: {
            y: {
                min: 0,
                max: userData.goal * 1.25, // goal
            }
        }
    }

    let total = 0;
    userData.history.map((day) => {
        total += day
    })
    total += userData.curr;

    return (
        <div className={styles.stats}>
            <div className={styles.container}>
                <Line data={data} options={options}>
                </Line>
            </div>
            <div className={styles.data}>
                <div className={styles.box}>
                    <h2>Total Weekly Intake</h2>
                    <div>{`${app_state.isImperial ? `${(userData.curr * 0.03381402).toFixed(1)}oz` : `${(userData.curr).toFixed(1)}ml`}`}</div>
                </div>
                <div className={styles.box}>
                    <h2>Streak</h2>
                    <div>{userData.streak}</div>
                </div>
            </div>
        </div>
    )
}

export default StatsPage;