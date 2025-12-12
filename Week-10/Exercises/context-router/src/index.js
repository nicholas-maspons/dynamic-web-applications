import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { NavigationProvider } from './context/navigation'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // we dont have to worry abut value prop bc thats taken care of in the componet itself
<NavigationProvider>
    <App />
</NavigationProvider>

)
