import { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from "../App";
import { useSelector, useDispatch } from 'react-redux';
import { addIntake } from '../store';
import axios from 'axios';

import styles from './HomePage.module.scss';

function HomePage () {

    // console.log('rendered')
    const localSum = useRef(0);


    const dispatch = useDispatch()
    const curr = useSelector((state) => state.user.curr)
    
    // will be added to curr in json
    const [amount, setAmount] = useState('')

    const handleChange = (event) => {
        setAmount(event.target.value)
    }

    // NICHOLAS, redo this after the other 2 projects and come back. okay? NVM I GOT IT
    useEffect(() => {

        const updateDatabase = async() => {
            const response = await axios.patch('http://localhost:3001/user', {
                curr: curr + parseInt(localSum.current)
            })
        }

        return () => {
            updateDatabase()
        }

    }, [])

    const app_state = useContext(AppContext);

    const handleClick = async (event) => {
        localSum.current += parseInt(event.target.value)
        // console.log(typeof(event.target.value))
        let toAdd = parseFloat(event.target.value); 
        if (app_state.isImperial) {toAdd = toAdd * 29.5735}

        dispatch(addIntake(toAdd))
        // move to 
        // const response = await axios.patch('http://localhost:3001/user', {
        //     curr: curr + toAdd
        // })
    }

    // Two functions that do the same thing above and below. i dont like this but its easier for now
    const handleSubmit = async (event) => {

        event.preventDefault() 

        

        localSum.current += parseInt(amount)
        let add = parseInt(amount)
        if (app_state.isImperial) add = add * 29.5735 

        dispatch(addIntake(add))
        // const response = await axios.patch('http://localhost:3001/user', {
        //     curr: curr + add
        // })
        setAmount('')
    }
    
    const currentIntake = useSelector((state) => {
        if (app_state.isImperial) {
            return state.user.curr * 0.03381402
        }
        return state.user.curr
    })
    const intakeGoal = useSelector((state) => {
        if (app_state.isImperial) {
            return state.user.goal * 0.03381402
        }
        return state.user.goal
    })

    const percent = (currentIntake/intakeGoal) * 100
    
    // console.log(intakeGoal)

    return (
        <div className={styles.home}>
            {/* replace with actual component later (never) */}
            <div className={styles.progress}>
                {/* two sets of {{}} because style takes expects and object, and then JSX needs {} to evaluate it */}
                <div style={{ background: `conic-gradient(var(--primary-color) 0% ${percent}%, var(--panel-bg) ${percent}% 100%)` }} className={styles.bottom_circle}></div>
                {/* the shite circle that will cover alot of the blue circle in the back to look like a progress bar. Requires absolute. */}
                <div className={styles.top_circle}>
                    {`${currentIntake.toFixed(1)} / ${intakeGoal.toFixed(1)} ${app_state.isImperial ? "oz" : "ml"}`}
                </div>
                
            </div>
            <form className={styles.inputs} onSubmit={handleSubmit}>
                <button type='button' onClick={handleClick} value={app_state.isImperial ? "1" : "25"} className={styles.input}>{`${app_state.isImperial ? "1oz" : "25ml"}`}</button>
                <button type='button' onClick={handleClick} value={app_state.isImperial ? "4" : "100"} className={styles.input}>{`${app_state.isImperial ? "4oz" : "100ml"}`}</button>
                <input className={`${styles.input} ${styles.text_input}`} type="text" value={amount} onChange={handleChange} placeholder='Enter a number...'/>
            </form>
        </div>
    )
}

export default HomePage;
