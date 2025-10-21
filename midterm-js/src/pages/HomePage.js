import { useState } from 'react';
import { useContext } from "react";
import { AppContext } from "../App";

import styles from './HomePage.module.scss';

function HomePage () {

    const [amount, setAmount] = useState(0)
    
    const app_state = useContext(AppContext);

    // const total = 100
    const intake = 200;
    const goal = 1000;

    const percent = (intake / goal) * 100
    // const remainder = 100 - percent

    return (
        <div className={styles.home}>
            {/* replace with actual component later (never) */}
            <div className={styles.progress}>
                {/* two sets of {{}} because style takes expects and object, and then JSX needs {} to evaluate it */}
                <div style={{ background: `conic-gradient(var(--primary-color) 0% ${percent}%, var(--panel-bg) ${percent}% 100%)` }} className={styles.bottom_circle}></div>
                {/* the shite circle that will cover alot of the blue circle in the back to look like a progress bar. Requires absolute. */}
                <div className={styles.top_circle}>{app_state.isImperial ? "3.38/16.91 oz" : "100/500 ml"}</div>
            </div>
            <div className={styles.button}>Add Water</div>
        </div>
    )
}

export default HomePage;