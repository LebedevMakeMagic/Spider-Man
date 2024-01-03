import React from 'react'
import { SpiderMan } from './SpiderMan'
import { Environment, OrbitControls, Sky } from '@react-three/drei'
import {
  Bloom,
  BrightnessContrast,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Noise,
  ToneMapping,
  Vignette
} from '@react-three/postprocessing'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'

const SpiderManTheatre = getProject('SpiderMan').sheet('Layer')

studio.initialize()
studio.extend(extension)

const SMWrapper = () => {
  return (
    <>
      <OrbitControls />
      {/* <Environment preset='dawn'  /> */}
      <Sky />
      <EffectComposer>
        <DepthOfField focusDistance={0.0004} focalLength={0.015} bokehScale={7} height={480} />
        <Bloom
          intensity={1} // The bloom intensity.
          luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.25} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.3} darkness={0.9} />
        <BrightnessContrast
          contrast={0.08} // contrast: min -1, max: 1
        />
        <ChromaticAberration
          offset={[0.0009, 0.0009]} // color offset
        />
        <ToneMapping
          adaptive={true} // toggle adaptive luminance map usage
          resolution={256} // texture resolution of the luminance map
          middleGrey={5} // middle grey factor
          maxLuminance={20.0} // maximum luminance
          averageLuminance={1.03} // average luminance
          adaptationRate={4.0} // luminance adaptation rate
        />
      </EffectComposer>
      <SheetProvider sheet={SpiderManTheatre}>
        <e.mesh theatreKey="pointLight">
          <pointLight color={'orange'} position={[-1, 0.9, 12]} intensity={3} />
        </e.mesh>
        <SpiderMan />
      </SheetProvider>
    </>
  )
}

export default SMWrapper
