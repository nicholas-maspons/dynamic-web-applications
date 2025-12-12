import { useContext } from "react"
import NavigationContext from "../context/navigation"


// this is a nice way to not have to repeat useContext everywhere
const useNavigation = () => {
    return (
        useContext(NavigationContext)
    )
}

export default useNavigation;
