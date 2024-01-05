import React, { useEffect } from 'react'
import { BakeShadows, Environment, Preload, SoftShadows, useProgress } from '@react-three/drei'
import { Bloom, BrightnessContrast, ChromaticAberration, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { getProject } from '@theatre/core'
import { editable as e, PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import { Symbiote } from './Symbiote'
import { Canvas } from '@react-three/fiber'
import Theatre from '../../theatre/Symbiote.json'
import MainTheme from '../../mainTheme.mp3'
import useSound from 'use-sound'

const SymbioteTheatre = getProject('Symbiote', { state: Theatre }).sheet('Layer')

const SymbioteWrapper = () => {
  const { loaded } = useProgress()
  const [playMain] = useSound(MainTheme, { volume: 0.2 })

  useEffect(() => {
    if (loaded > 30) {
      SymbioteTheatre.project.ready.then(() => SymbioteTheatre.sequence.play({ iterationCount: 1 }))
      playMain()
    }
  }, [loaded, playMain])

  return (
    <>
      {loaded < 32 && <div className="SymbioteLoading">Loading...</div>}

      <Canvas id="canvasSpiderMan" shadows>
        <Environment preset="night" />

        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.1} luminanceSmoothing={0.7} />
          <Noise opacity={0.03} />
          <Vignette eskil={false} offset={0.03} darkness={0.9} />
          <BrightnessContrast contrast={0.1} />
          <ChromaticAberration offset={[0.00009, 0.00009]} />
        </EffectComposer>

        <SheetProvider sheet={SymbioteTheatre}>
          <e.mesh theatreKey="Main">
            <Symbiote />
          </e.mesh>

          <e.directionalLight theatreKey="Light1Symb" color={'#678493'} intensity={0.8} power={6} distance={1} raycast={1} />

          <e.mesh theatreKey="Light2">
            <pointLight color={'#678493'} castShadow decay={17} intensity={1} power={17} distance={30} raycast={100} />
          </e.mesh>

          <e.pointLight
            theatreKey="Light2Symb"
            color={'#678493'}
            castShadow
            decay={17}
            intensity={2}
            power={17}
            distance={30}
            raycast={100}
          />

          <PerspectiveCamera theatreKey="Camera" makeDefault />
        </SheetProvider>
        <BakeShadows />
        <Preload all />
        <SoftShadows size={1} focus={12} />
      </Canvas>
    </>
  )
}

export default SymbioteWrapper
