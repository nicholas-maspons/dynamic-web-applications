const ProgressBar = (props) => {

    const {color, percent} = props;

    const colors = {
        green: "bg-green-500",
        blue: "bg-blue-500",
        red: "bg-red-500",
        orange: "bg-orange-500",
        purple: "bg-purple-500",
    };

    const percents = {
        "0": 0,
        "10": 10,
        "25": 25,
        "50": 50,
        "75": 75,
        "100": 100,
    };    

    const baseClass = 'w-[80%] h-[25px] flex items-center rounded-full'
    
    return (
    <span className={`${baseClass} bg-gray-200`}>
        <span className={`h-[85%] rounded-full ${colors[color]}`} style={{ width: `${percents[percent]}%` }}></span>
    </span>
    );
}

export default ProgressBar;
