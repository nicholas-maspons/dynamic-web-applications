import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import HomePage from './pages/HomePage'
import StatsPage from './pages/StatsPage'
import SettingsPage from './pages/SettingsPage'

import './App.scss'

export const AppContext = createContext();
const site_name = 'Water Intake Tracker'

const pages = [
  // HomePage and the other values of the component keys are imported from their respective files. Don't overthink this. OKAy?
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Stats',
    path: '/stats',
    component: StatsPage
  },
  {
    name: 'Settings',
    path: '/settings',
    component: SettingsPage
  }
]

// add an active (underline) showing which page we are currently on? use the isActive from NavLink
function App() {

  // will be used in a ternary later. perhaps in the returned div classname .dark and .light in App.css if i use one. (I did okay)
  const [isDark, setIsDark] = useState(false);
  const [isImperial, setIsImperial] = useState(false);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  }

  const handleUnitToggle = () => {
    setIsImperial(!isImperial);
  }
  

  // maybe this will be mroe complicated when i loop witht a version similar to below
const app_state = {
    isDark,
    handleThemeToggle,
    isImperial,
    handleUnitToggle
};
  

  // const app_state = [
  //   {
  //   title: 'Personalization',
  //   states: 
  //     [
  //     {
  //       bool: isLight,
  //       func: handleThemeToggle
  //     },
  //     {
  //       bool: isMetric,
  //       func: handleUnitToggle
  //     }
  //     ]
  //   }
  // ]

  return (
    // I have to pass the bool as well. And as I pass even more functions and the bools associated with them, Ill be passing an object/array maybe
    // so ill pass an object (or a var of one so it looks nicer) here instead. Later tho
    <AppContext.Provider value={app_state}>
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header name={site_name} pages={pages}/>
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} element={<page.component/>}/>
        })}
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
