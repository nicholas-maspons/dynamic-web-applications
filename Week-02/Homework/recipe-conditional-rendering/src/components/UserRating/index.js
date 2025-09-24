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

    // spread operator is used so that there are undefined values inside the array. If I did Array(count), map won't loop through the array since all the slots are completely empty
    const hearts = [...Array(count)].map(() => {return <Favorite/>})

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
