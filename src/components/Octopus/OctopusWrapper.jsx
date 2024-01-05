import React, { useEffect } from 'react'
import { SpiderMan } from './SpiderMan'
import {
  BakeShadows,
  Environment,
  Preload,
  Sky,
  SoftShadows,
  useProgress
} from '@react-three/drei'
import {
  Bloom,
  BrightnessContrast,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Vignette
} from '@react-three/postprocessing'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import { Canvas } from '@react-three/fiber'
import Theatre from '../../theatre/SpiderMan.json'
import useSound from 'use-sound'
import MainTheme from '../../mainTheme.mp3'

const SpiderManTheatre = getProject('SpiderMan', { state: Theatre }).sheet('Layer')

// studio.initialize()
// studio.extend(extension)

const OctopusWrapper = () => {
  const { loaded } = useProgress()
  const [playMain] = useSound(MainTheme, { volume: 0.2 })

  useEffect(() => {
    if (loaded > 30) {
      SpiderManTheatre.project.ready.then(() => SpiderManTheatre.sequence.play({ iterationCount: 1 }))
      playMain()
    }
  }, [playMain, loaded])
  return (
    <>
      {loaded < 31 && <div className="SymbioteLoading">Loading...</div>}
      <Canvas id="canvasSpiderMan" shadows>
        <Environment preset="city" />
        <Sky />
        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.1} luminanceSmoothing={0.7} />
          <Noise opacity={0.03} />
          <Vignette eskil={false} offset={0.03} darkness={0.9} />
          <BrightnessContrast contrast={0.1} />
          <ChromaticAberration offset={[0.00009, 0.00009]} />
        </EffectComposer>

        <SheetProvider sheet={SpiderManTheatre}>
          <e.mesh theatreKey="pointLight">
            <directionalLight shadow-mapSize={[1024, 1024]} castShadow color={'orange'} position={[-1, 0.9, 12]} intensity={1} />
          </e.mesh>
          <e.mesh theatreKey="pointLight2">
            <pointLight shadow-mapSize={[1024, 1024]} color={'orange'} position={[-1, 0.9, 12]} intensity={1} />
          </e.mesh>

          <e.mesh theatreKey="pointLight3">
            <directionalLight color={'#FF8C00'} position={[-1, 0.9, 12]} intensity={0.6} />
          </e.mesh>
          <e.mesh theatreKey="pointLight4">
            <spotLight color={'orange'} position={[-1, 0.9, 12]} intensity={1.5} />
          </e.mesh>
          <PerspectiveCamera theatreKey="Camera" makeDefault />
          <SpiderMan />
          <SoftShadows size={1} focus={12} />
        </SheetProvider>
        <BakeShadows />
        <Preload all />
      </Canvas>
    </>
  )
}

export default OctopusWrapper
