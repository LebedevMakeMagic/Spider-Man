import './App.css'
import { Canvas } from '@react-three/fiber'
import SMWrapper from './components/SMWrapper'

function App() {
  return (
    <div className="SpiderMan">
      <Canvas id="canvasSpiderMan" shadows>
        <SMWrapper />
      </Canvas>
    </div>
  )
}

export default App
