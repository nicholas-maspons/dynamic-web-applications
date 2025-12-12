// everytime we change paths, we want provider to rerender. UseState
import { createContext, useState, useEffect } from "react";

// then create the context using the import
const NavigationContext = createContext()

// children is what we wrap our NavProivder around
const NavigationProvider = ({children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    // keep track of back button by setting setting currentPath
    // runs once on mount (when the component first shows up)
    useEffect(() => {
        // add an event listener to place the current path in state
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }

        // watch for user interactions with our routes
        window.addEventListener('popState', handler) // popState is called when the user hits the back button

        // we always return a cleanup function wen we use useEffect to add an eventListener
        return () => {
            window.removeEventListener('popState', handler)
        }

    }, [])

    // we also need a function to help us navigate around normally
    const navigate = (to) => {
        // this takes care of the browser navbar
        window.history.pushState({}, '', to)
        // we also need to update our currentPath in state so that our app rerenders and shows the new page
        setCurrentPath(to)
    }

    return (
        // sharing currentPath and navigate function. We are inside an object. shorthand for {currentPath: currentPath, navigate: navigate}
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    )
}

export {NavigationProvider}
export default NavigationContext