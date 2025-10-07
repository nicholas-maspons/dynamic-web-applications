import { useState } from "react";

const Toggle = (props) => {

    const {color} = props;

    const [isOn, setIsOn] = useState(false)

    const handleClick = () => {setIsOn(!isOn)}

    const baseClass = 'w-[100px] h-[50px] flex items-center rounded-full'
    return (
        <span className={`${baseClass} ${isOn ? `bg-${color}-500 justify-end` : 'bg-gray-200' }`} onClick={handleClick}>
            <span className="w-[50%] h-[85%] mx-[5px] bg-white rounded-full"></span>
        </span>
    );
}

export default Toggle;
