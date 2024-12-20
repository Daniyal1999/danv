/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mersedes_cls63.glb --transform --shadows 
Files: mersedes_cls63.glb [8.19MB] > /Users/daniyal.farooque/Documents/JSProject/Mario-Kart-3.js/public/models/characters/mersedes_cls63-transformed.glb [546.38KB] (93%)
Author: DZST ALG STREET (https://sketchfab.com/hipohbb1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mersedes-cls63-16da1acd0ca741819a6d349fe6db1efc
Title: mersedes cls63
*/

import React, { useEffect, useRef } from 'react'
import { Cylinder, OrbitControls, Sphere, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import FakeGlowMaterial from '../../ShaderMaterials/FakeGlow/FakeGlowMaterial'
import FakeFlame from '../../ShaderMaterials/FakeFlame/FakeFlame'
import { useStore } from '../../store'
import gsap from 'gsap'

export function Mario({ currentSpeed, steeringAngleWheels, isBoosting, shouldLaunch, ...props }) {
  const { nodes, materials } = useGLTF('./models/characters/red_mercedes-transformed.glb')

  const frontLeftWheel = useRef()
  const frontRightWheel = useRef()
  const rearWheels = useRef()
  const frontWheels = useRef()
  const [scale, setScale] = React.useState(1)
  const { actions } = useStore()
  const [shouldSlow, setShouldSlow] = React.useState(false)
  const mario = useRef();
  // isBoosting = true;

  useFrame((_, delta) => {
    // const rotation = currentSpeed / 100
    // frontLeftWheel.current.rotation.x += rotation
    // frontRightWheel.current.rotation.x += rotation
    // rearWheels.current.rotation.x += rotation
    // frontWheels.current.rotation.y = steeringAngleWheels
    if (isBoosting) {
      setScale(Math.min(scale + 0.05 * 144 * delta, 1))
    } else {
      setScale(Math.max(scale - 0.03 * 144 * delta, 0))
    }
    setShouldSlow(actions.getShouldSlowDown());
  })

  useEffect(() => {
    if (shouldLaunch) {
      gsap.to(mario.current.rotation, { duration: 1.5, y: Math.PI * 3 })
      mario.current.rotation.set(0, 0, 0);
    }
  }, [shouldLaunch])

  return (
    <group {...props} dispose={null} scale={[25, 25, 25]} position={[1.23, 0.07, 0]} castShadow={true}>
      <mesh castShadow receiveShadow geometry={nodes.BLACK_METAL_METAL_PIANO_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} position={-0.06} />
      <mesh castShadow receiveShadow geometry={nodes.DLP_tex_MCLS_tex_0.geometry} material={materials.MCLS_tex} position={[-0.035, 0.087, -0.035]} rotation={[-Math.PI / 2, 0, 0]} scale={0} />
      <mesh castShadow receiveShadow geometry={nodes.mer_e63amg_10_caliperlf_lod0_caliperLF_caliper___958_vertic.geometry} material={materials.BRAKES} position={[-0.092, 0.016, -0.12]} rotation={[-Math.PI / 2, 0, 0]} scale={0.043} />
      <mesh castShadow receiveShadow geometry={nodes.mer_e63amg_13_wheellf_WHEELS_BLACK_0.geometry} material={materials.PaletteMaterial001} position={[-0.096, 0.016, -0.12]} rotation={[-1.608, 0.008, -0.001]} scale={0.001} />
      <mesh castShadow receiveShadow geometry={nodes.Object179_Gar_alu_0.geometry} material={materials.PaletteMaterial002} position={[-0.035, 0.087, -0.035]} rotation={[-Math.PI / 2, 0, 0]} scale={0} />
      <mesh castShadow receiveShadow geometry={nodes['Object187_Material_#44_0'].geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
    </group>
  )
}


useGLTF.preload('./models/characters/red_mercedes-transformed.glb')
