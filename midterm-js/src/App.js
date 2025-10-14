import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import HomePage from './pages/HomePage'
import StatsPage from './pages/StatsPage'
import SettingsPage from './pages/SettingsPage'

import './App.scss'

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

  // will be used in a ternary later. perhaps in the returned div classname .dark and .light in App.css if i use one
  const [isLight, setIsLight] = useState(true);

  const handleThemeToggle = () => {
    setIsLight(!isLight);
  }

  

  return (
    <div className={`app ${isLight ? "light" : "dark"}`}>
      <Header name={site_name} pages={pages}/>
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} element={<page.component/>}/>
        })}
      </Routes>
    </div>
  );
}

export default App;
