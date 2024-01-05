import './App.css'
import SMWrapper from './components/Octopus/OctopusWrapper'
import { useState } from 'react'
import SymbioteWrapper from './components/Symbiote/SymbioteWrapper'
const Loader = ({ appState, setAppState }) => {
  return (
    <div className="preloader">
      <div className="PreloadContainer">
        <button className="ButtonSP2" onClick={() => setAppState(2)}>
          Spider man 2
        </button>
        <button className="ButtonSP3" onClick={() => setAppState(1)}>
          Spider man 3
        </button>
      </div>
    </div>
  )
}

function App() {
  const [appState, setAppState] = useState(false)

  return (
    <div className="SpiderMan">
      {appState === 1 && <SymbioteWrapper appState={appState} />}
      {appState === 2 && <SMWrapper appState={appState} />}
      {!appState && <Loader appState={appState} setAppState={setAppState} />}
    </div>
  )
}

export default App
