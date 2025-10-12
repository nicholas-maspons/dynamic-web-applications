import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import './App.scss'

const site_name = 'Water Intake Tracker'
// 'pages' array of objects
const pages = [
  {'Home': '/'},
  {'Stats': '/stats'},
  {'Settings': '/settings'}
]

function App() {

  // will be used in a ternary later. perhaps in the returned div classname .dark and .light in App.css if i use one
  const [isLight, setIsLight] = useState(false);



  

  return (
    <div className="app">
      <Header name={site_name} pages=""/>
      <Routes>
        {/* maybe map here also */}
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
