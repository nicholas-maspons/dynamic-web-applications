import { useState } from "react";

import styles from './Toggle.module.scss'

function Toggle(props) {

    const {functionFromApp} = props;

    const [isOn, setIsOn] = useState(false)

    const handleClick = () => {setIsOn(!isOn)}

    // the background of the once inner span wouldnt appear until the outer used flex and made it a flex child. 
    // Why am I typing this if im not using span anymore
    // Also the display type of the parent determines if the width and height on the child has any affect. 
    // Honestly just ignore this Nicholas. But it relates to my Toggle from Week03 since i used span there
    // Just sticking to divs since those will always appear when given width and heoght + bg color for visibility, 
    // even though I use flex in the end either way (div or span)
    return (
        
        <div onClick={handleClick} className={`${styles.background} ${isOn ? styles.on : styles.off}`}>
            <div className={styles.knob}></div>
        </div>

        
    )
}

export default Toggle;
