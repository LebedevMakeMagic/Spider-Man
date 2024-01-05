import React, { useEffect, useRef } from 'react'
import { CubeCamera, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import * as THREE from 'three'

export function SpiderMan(props) {
  const { nodes, materials } = useGLTF('/model/SpiderMan.glb')

  useEffect(() => {
    ;[nodes].forEach((node) => (node.frustumCulled = false))
  }, [nodes])

  const GlassMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.98,
    color: '#9eacad',
    transparent: false,
    roughness: 0.2,
    thickness: 100,
    envMapIntensity: 1,
    reflectivity: 0.01,
    clearcoat: 1,
    iridescence: 1,
    sheen: 1,
    sheenRoughness: 1,
    attenuationDistance: 1,
    toneMapped: false
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes['Ch��o_0'].geometry}
        material={materials.material}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      {/* <mesh
        castShadow
        frustumCulled={true}
        geometry={nodes['Ch��o_1'].geometry}
        material={materials.Predios_Planos}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      /> */}
      <mesh
        geometry={nodes['Ch��o_2'].geometry}
        material={materials.material_3}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        geometry={nodes['Ch��o_4'].geometry}
        material={materials.material_5}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        geometry={nodes['Ch��o_5'].geometry}
        material={materials.material_6}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        geometry={nodes['Ch��o_6'].geometry}
        material={materials.material_7}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        geometry={nodes['Ch��o_7'].geometry}
        material={materials.material_8}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        geometry={nodes['Ch��o_8'].geometry}
        material={materials.Madeira_Trilho}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Ch��o_8001'].geometry}
        material={materials.Madeira_Trilho}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Ch��o_9'].geometry}
        material={materials.Ferro_Trilhos}
        position={[-1.09, -27.532, 56.082]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.011}
      >
        <meshStandardMaterial {...materials.Acessorios} metalness={0.2} color={'grey'} />
      </mesh>
      <CubeCamera resolution={256} frames={2}>
        {(texture) => (
          <e.mesh
            theatreKey="Tent1"
            castShadow
            geometry={nodes.Cylinder001_0.geometry}
            material={materials.Acessorios}
            position={[-1.09, -0.798, 11.156]}
            rotation={[-1.563, -0.052, -0.004]}
            scale={0.011}
          >
            <meshStandardMaterial {...materials.Acessorios} metalness={0.2} roughness={0.1} envMap={texture} />
          </e.mesh>
        )}
      </CubeCamera>
      <CubeCamera resolution={256} frames={2}>
        {(texture) => (
          <e.mesh
            theatreKey="Tent2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_0.geometry}
            material={materials.Acessorios}
            position={[-0.917, -0.636, 11.307]}
            rotation={[-1.58, -0.075, -0.144]}
            scale={0.011}
          >
            <meshStandardMaterial {...materials.Acessorios} metalness={0.2} roughness={0.4} envMap={texture} />
          </e.mesh>
        )}
      </CubeCamera>
      <CubeCamera resolution={256} frames={2}>
        {(texture) => (
          <e.mesh
            theatreKey="Tent3"
            geometry={nodes.Cylinder003_0.geometry}
            material={materials.Acessorios}
            position={[-1.424, -0.69, 11.172]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.011}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial {...materials.Acessorios} metalness={0.2} roughness={0.4} envMap={texture} />
          </e.mesh>
        )}
      </CubeCamera>
      <CubeCamera resolution={256} frames={2}>
        {(texture) => (
          <e.mesh
            theatreKey="Tent4"
            geometry={nodes.Cylinder004_0.geometry}
            material={materials.Acessorios}
            position={[-1.09, -0.68, 11.466]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.011}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial {...materials.Acessorios} metalness={0.2} roughness={0.4} envMap={texture} />
          </e.mesh>
        )}
      </CubeCamera>

      <CubeCamera resolution={256} frames={2}>
        {(texture) => (
          <mesh
            geometry={nodes.NuvemDeVidro_0.geometry}
            material={GlassMaterial}
            position={[-0.584, 0.15, 13.679]}
            rotation={[1.473, -0.215, 1.143]}
            scale={0.011}
            castShadow
            receiveShadow
          />
        )}
      </CubeCamera>

      <group position={[0, 0.2, 0]}>
        <mesh
          geometry={nodes.Janelas_0.geometry}
          frustumCulled={false}
          material={GlassMaterial}
          position={[0.451, 0.854, 13]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.011}
          castShadow
          receiveShadow
        ></mesh>
        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <mesh
              castShadow
              receiveShadow
              frustumCulled={false}
              geometry={nodes.Trem002_0.geometry}
              material={materials.Trem}
              position={[-1.09, -0.848, 0.958]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.011}
            >
              <meshStandardMaterial
                {...materials.Trem}
                roughness={0.2}
                metalness={0.2}
                emissive={'orange'}
                emissiveIntensity={0.04}
                envMap={texture}
              />
            </mesh>
          )}
        </CubeCamera>
        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <mesh
              castShadow
              geometry={nodes['Corrim��es001_0'].geometry}
              material={materials.Corrimos}
              position={[-1.09, -0.848, 21.301]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.011}
            >
              <meshStandardMaterial {...materials.Corrimos} metalness={0.9} roughness={0.2} envMap={texture} />
            </mesh>
          )}
        </CubeCamera>
        <CubeCamera resolution={256} frames={2}>
          {(texture) => (
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.Cadeira_HR_0.geometry}
              material={materials.Cadeira}
              position={[-0.136, -0.848, 12.36]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.011}
            >
              <meshStandardMaterial metalness={0.7} {...materials.Cadeira} roughness={0.3} envMap={texture} />
            </mesh>
          )}
        </CubeCamera>
        <group position={[1.172, -0.493, 12.9]} rotation={[-1.581, -0.557, -1.633]} scale={1.066}>
          <mesh
            castShadow
            geometry={nodes.sv_doctoroctopus01_s03_01_sv_doctoroctopus01_s03_01_0001_1.geometry}
            material={materials['sv_doctoroctopus01_s03_01.003']}
          />
          <mesh
            castShadow
            geometry={nodes.sv_doctoroctopus01_s03_01_sv_doctoroctopus01_s03_01_0001_2.geometry}
            material={materials['sv_doctoroctopus01_s03_03.003']}
          />
          <mesh
            castShadow
            geometry={nodes.sv_doctoroctopus01_s03_01_sv_doctoroctopus01_s03_01_0001_3.geometry}
            material={materials['sv_doctoroctopus01_s03_04.003']}
          />
          <mesh
            castShadow
            geometry={nodes.sv_doctoroctopus01_s03_01_sv_doctoroctopus01_s03_01_0001_4.geometry}
            material={materials['sv_doctoroctopus01_s03_02.003']}
          />
          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                castShadow
                geometry={nodes.Mesh_0005rip_Spiderman_Web_D_0001.geometry}
                material={materials['Spiderman_Web_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  {...materials['Spiderman_Web_D.001']}
                  roughness={0.2}
                  emissive={'white'}
                  emissiveIntensity={0.05}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>
        </group>
        <group position={[-0.2, 0, 0]}>
          <CubeCamera resolution={256} frames={2} castShadow receiveShadow>
            {(texture) => (
              <mesh
                receiveShadow
                castShadow
                geometry={nodes.Mesh_0001rip_Spiderman_Boots_D_0001.geometry}
                material={materials['Spiderman_Boots_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial {...materials['Spiderman_Boots_D.001']} envMap={texture} />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2} castShadow receiveShadow>
            {(texture) => (
              <mesh
                receiveShadow
                castShadow
                geometry={nodes['Mesh_0002rip_Spiderman_Web_D_(1)_0'].geometry}
                material={materials['Spiderman_Web_D_1.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  metalness={0.002}
                  roughness={0.002}
                  emissive={'grey'}
                  emissiveIntensity={0.5}
                  {...materials['Spiderman_Web_D_1.001']}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                receiveShadow
                castShadow
                geometry={nodes.Mesh_0003rip_Spiderman_Hands_D_0001.geometry}
                material={materials['Spiderman_Hands_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial {...materials['Spiderman_Hands_D.001']} envMap={texture} />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                castShadow
                geometry={nodes.Mesh_0004rip_Spiderman_Lens_D_0001.geometry}
                material={materials['Spiderman_Web_D_1.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  {...materials['Spiderman_Web_D_1.001']}
                  metalness={0.002}
                  roughness={0.002}
                  emissive={'grey'}
                  emissiveIntensity={0.2}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                castShadow
                geometry={nodes.Mesh_0005rip_Spiderman_Web_D_0001.geometry}
                material={materials['Spiderman_Web_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  {...materials['Spiderman_Web_D.001']}
                  roughness={0.2}
                  emissive={'white'}
                  emissiveIntensity={0.05}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                castShadow
                geometry={nodes.Mesh_0006rip_Spiderman_Head_D_0001.geometry}
                material={materials['Spiderman_Head_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial {...materials['Spiderman_Head_D.001']} envMap={texture} />
              </mesh>
            )}
          </CubeCamera>
          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                castShadow
                geometry={nodes.Mesh_0007rip_Spiderman_Torso_D_0001.geometry}
                material={materials['Spiderman_Torso_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial {...materials['Spiderman_Torso_D.001']} envMap={texture} />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                castShadow
                geometry={nodes['Mesh_0008rip_Spiderman_Web_D_(2)_0'].geometry}
                material={materials['Spiderman_Web_D_2.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  {...materials['Spiderman_Web_D_2.001']}
                  roughness={0.02}
                  emissive={'white'}
                  emissiveIntensity={0.05}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>

          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                geometry={nodes.Mesh_0009rip_Spiderman_Web_D_0001.geometry}
                material={materials['Spiderman_Web_D.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  {...materials['Spiderman_Web_D.001']}
                  roughness={0.2}
                  emissive={'white'}
                  emissiveIntensity={0.05}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>
          <CubeCamera resolution={256} frames={2}>
            {(texture) => (
              <mesh
                receiveSadow
                castShadow
                geometry={nodes['Mesh_0000rip_Spiderman_Torso_D_(1)_0'].geometry}
                material={materials['Spiderman_Torso_D_1.001']}
                position={[-0.634, -0.386, 12.842]}
                rotation={[1.574, 0.259, -1.627]}
                scale={1.202}
              >
                <meshStandardMaterial
                  {...materials['Spiderman_Torso_D_1.001']}
                  roughness={0.9}
                  emissive={'white'}
                  emissiveIntensity={0.01}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/SpiderMan.glb')
