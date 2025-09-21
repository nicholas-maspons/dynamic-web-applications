import { useState } from "react";
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg';

import styles from './UserRating.module.css'

const UserRating = () => {
    
    const [count, setCount] = useState(0)

    const handleMinus = () => {
        if (count === 0) {return;}
        setCount(count - 1)
    }

    const handlePlus = () => {
        if (count === 5) {return;}
        setCount(count + 1)
    }

    // spread operator used so that there are undefined values inside the array instead of empty slots, which map won't loop through
    const hearts = [...Array(count)].map(() => {return <Favorite/>})

    // && returns the first falsy value or the last value if everything is truthy
    return (
        <div className={styles.user_rating}>
            {/*             
            conditional styling approach
            {<button className={`${styles.rating_button} ${count > 0 ? '' : styles.hide}`} onClick={handleMinus}>-</button>} 
            */}

            {count > 0 ? 
            <button className={styles.rating_button} onClick={handleMinus}>-</button>
            :
            <button className={`${styles.rating_button} ${styles.hide}`} onClick={handleMinus}>-</button>}
            <div className={styles.stars}>{hearts}</div>
            {count < 5 ? 
            <button className={styles.rating_button} onClick={handlePlus}>+</button>
            :
            <button className={`${styles.rating_button} ${styles.hide}`} onClick={handlePlus}>+</button>}
            
        </div>
    )
}

export default UserRating;
