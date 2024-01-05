import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, CubeCamera, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function Symbiote(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/original-transformed.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    const anims = Object.values(actions)
    anims.forEach((elem) => elem.play())
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-0.338, 27.062, -6.861]} rotation={[-Math.PI / 2, 0, -1.47]} scale={-0.459}>
          <primitive frustumCulled={false} object={nodes.mixamorigHips} />
        </group>
        <group name="Armature001" position={[-0.26, 27.062, -6.863]} rotation={[Math.PI / 2, 0, -1.47]} scale={0.459}>
          <primitive frustumCulled={false} object={nodes.mixamorigHips_1} />
        </group>
        <mesh
          name="Cube012_Parralax_Mapping_0"
          geometry={nodes.Cube012_Parralax_Mapping_0.geometry}
          material={materials.Parralax_Mapping}
          position={[5.879, 17.328, -6.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.148}
        >
          <meshStandardMaterial metalness={4} color={'black'} />
        </mesh>
        <mesh
          name="Tower"
          geometry={nodes.Tower.geometry}
          material={materials['Material.001']}
          position={[5.879, 17.335, -6.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.148}
        >
          <meshStandardMaterial
            metalness={1}
            {...materials['Material.001']}
            emissive={'black'}
            roughness={0.02}
            emissiveIntensity={0.5}
          />
        </mesh>

        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <mesh
              name="TowerGlass"
              frustumCulled={false}
              geometry={nodes.TowerGlass.geometry}
              position={[5.879, 17.328, -6.933]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.148}
            >
              <meshStandardMaterial {...materials.Glass} emissive={'#678493'} emissiveIntensity={0.06} envMap={texture} />
            </mesh>
          )}
        </CubeCamera>
        <mesh
          receiveShadow
          castShadow
          name="Object_4003"
          geometry={nodes.Object_4003.geometry}
          material={materials['material.001']}
          position={[-0.754, 26.452, -4.517]}
          rotation={[3.04, 1.015, -3.127]}
          scale={[0.581, 0.538, 0.581]}
        />
        <mesh
          receiveShadow
          castShadow
          name="Object_5001"
          geometry={nodes.Object_5001.geometry}
          material={materials['red_light.001']}
          position={[-0.754, 26.452, -4.517]}
          rotation={[3.04, 1.015, -3.127]}
          scale={[0.581, 0.538, 0.581]}
        />
        <mesh
          receiveShadow
          castShadow
          name="Object_6001"
          geometry={nodes.Object_6001.geometry}
          material={materials['logos.001']}
          position={[-0.754, 26.452, -4.517]}
          rotation={[3.04, 1.015, -3.127]}
          scale={[0.581, 0.538, 0.581]}
        />
        <group name="Object_20" position={[-1.171, 26.488, -5.721]} rotation={[3.057, -0.556, -3.132]} scale={0.733}>
          <mesh name="Object_12002_1" geometry={nodes.Object_12002_1.geometry} material={materials['red_light.001']} />
          <mesh name="Object_12002_2" geometry={nodes.Object_12002_2.geometry} material={materials['logos.001']} />
        </group>
        <mesh
          name="Object_68"
          geometry={nodes.Object_68.geometry}
          material={materials['material_3.001']}
          position={[-0.494, 26.421, -4.817]}
          rotation={[3.04, 1.015, -3.127]}
          scale={[0.646, 0.646, 0.92]}
        />
        <mesh
          name="Object_178001"
          geometry={nodes.Object_178001.geometry}
          material={materials['.004']}
          position={[-3.526, 26.402, -2.775]}
          rotation={[2.946, 1.212, -3.023]}
          scale={12.913}
        >
          <meshStandardMaterial metalness={1} roughness={0.1} color={'black'} />
        </mesh>
        <mesh
          frustumCulled={false}
          name="Object_287003"
          geometry={nodes.Object_287003.geometry}
          material={materials['1.002']}
          position={[-2.857, 27.145, -0.472]}
          rotation={[3.078, 0.051, -3.138]}
          scale={[0.167, 0.286, 0.155]}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_2002"
          geometry={nodes.Object_2002.geometry}
          material={materials['Material.002']}
          skeleton={nodes.Object_2002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_3002"
          geometry={nodes.Object_3002.geometry}
          material={materials.Spiderman_Web_D_1}
          skeleton={nodes.Object_3002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_4002"
          geometry={nodes.Object_4002.geometry}
          material={materials.Spiderman_Head_D}
          skeleton={nodes.Object_4002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_8002"
          geometry={nodes.Object_8002.geometry}
          material={materials.Spiderman_Web_D_1}
          skeleton={nodes.Object_8002.skeleton}
        />

        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <skinnedMesh
              frustumCulled={false}
              name="Object_9002"
              geometry={nodes.Object_9002.geometry}
              material={materials.Spiderman_Torso_D}
              skeleton={nodes.Object_9002.skeleton}
            >
              <meshStandardMaterial {...materials.Spiderman_Torso_D} envMap={texture} />
            </skinnedMesh>
          )}
        </CubeCamera>
        <skinnedMesh
          frustumCulled={false}
          name="Object_10002"
          geometry={nodes.Object_10002.geometry}
          material={materials.Spiderman_Web_D_1}
          skeleton={nodes.Object_10002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_11002"
          geometry={nodes.Object_11002.geometry}
          material={materials.Spiderman_Web_D_1}
          skeleton={nodes.Object_11002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_12002"
          geometry={nodes.Object_12002.geometry}
          material={materials.Spiderman_Torso_D_1}
          skeleton={nodes.Object_12002.skeleton}
        />

        <skinnedMesh
          frustumCulled={false}
          name="Object_13002"
          geometry={nodes.Object_13002.geometry}
          material={materials.Spiderman_Hands_D}
          skeleton={nodes.Object_13002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_14002"
          geometry={nodes.Object_14002.geometry}
          material={materials.Spiderman_Boots_D}
          skeleton={nodes.Object_14002.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_2"
          geometry={nodes.Object_2.geometry}
          material={materials['Material.002']}
          skeleton={nodes.Object_2.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_3"
          geometry={nodes.Object_3.geometry}
          material={materials['Material.003']}
          skeleton={nodes.Object_3.skeleton}
        />
        <skinnedMesh
          name="Object_4001"
          geometry={nodes.Object_4001.geometry}
          material={materials['Material.004']}
          skeleton={nodes.Object_4001.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials['Material.005']}
          skeleton={nodes.Object_8.skeleton}
        />

        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <skinnedMesh
              frustumCulled={false}
              name="Object_9"
              geometry={nodes.Object_9.geometry}
              material={materials['Material.006']}
              skeleton={nodes.Object_9.skeleton}
            >
              <meshStandardMaterial {...materials['Material.006']} envMap={texture} />
            </skinnedMesh>
          )}
        </CubeCamera>
        <skinnedMesh
          frustumCulled={false}
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials['Material.005']}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials['Material.005']}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials['Material.006']}
          skeleton={nodes.Object_12.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials['Material.006']}
          skeleton={nodes.Object_13.skeleton}
        />

        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <skinnedMesh
              frustumCulled={false}
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials['Material.006']}
              skeleton={nodes.Object_14.skeleton}
            >
              <meshStandardMaterial {...materials['Material.006']} envMap={texture} />
            </skinnedMesh>
          )}
        </CubeCamera>
      </group>
    </group>
  )
}

useGLTF.preload('/original-transformed.glb')
