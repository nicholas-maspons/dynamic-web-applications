import { useState, useContext } from "react";
// import { ThemeContext } from "../../App";

import styles from './Toggle.module.scss'

function Toggle(props) {

    // const func = useContext(ThemeContext)
    // bool needed so that when you leave , the toggle is still on when you come back
    const {func, bool} = props;

    // const [isOn, setIsOn] = useState(false)

    const handleClick = () => {
        // the order I call these functions does not matter. Interesting. I think it's because the rerender is queued to execute after all other code is done
        // setIsOn(!isOn)
        // toggle the theme (or unit) Whatever this function may be
        func();
    }

    // the background of the once inner span wouldnt appear until the outer used flex and made it a flex child. 
    // Why am I typing this if im not using span anymore
    // Also the display type of the parent determines if the width and height on the child has any affect. 
    // Honestly just ignore this Nicholas. But it relates to my Toggle from Week03 since i used span there
    // Just sticking to divs since those will always appear when given width and heoght + bg color for visibility, 
    // even though I use flex in the end either way (div or span)
    return (
        
        <div onClick={handleClick} className={`${styles.background} ${bool ? styles.on : styles.off}`}>
            <div className={styles.knob}></div>
        </div>

        
    )
}

export default Toggle;
