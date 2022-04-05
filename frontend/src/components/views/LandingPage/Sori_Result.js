import * as THREE from "three"
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame,  useThree } from "@react-three/fiber";
import Model_Result from "./Model_Result"
import { OrbitControls } from "@react-three/drei";
import Speech_Bubble from "../../../assets/Speech_Bubble.jpg"
import './Alert/ToastAlert.css'
import TransferToast from './Alert/TransferToast'
import CheckToast from './Alert/CheckToast'
import FaceToast from './Alert/FaceToast'
import DepositToast from "./Alert/DepositToast";


const CameraControls = () => {
  const {
    camera, gl: {domElement}
  } = useThree();
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      // enableRotate={false}
      maxAzimuthAngle={Math.PI / 100}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 100}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const SpeechBubble = () => {
  return (
    <div className="Speech_Bubble">
      <img src={Speech_Bubble} alt="Speech_Bubble"/>
    </div>
  )
}

function Rig() {
  return useFrame((state) => {
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.y, 100 + state.mouse.y * 2 , 0.075)
  })
}

function BubbleData() {
  let data = '조회'
  if (data == '조회') {
    return CheckToast();
  } else if (data == '이체') {
    return TransferToast();
  } else if (data == '상품') {
    return DepositToast();
  } else if (data == '추천') {
    return FaceToast();
  }
}

export default function sori_Result() {
  return(
    <div className='LandingFull'>
      <SpeechBubble />
      <Canvas style={{ height: '96vh', width: '100vw' }} colorManagement shadowMap camera={{position: [0,0,8], fov:50}}>
        <CameraControls />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={1} />
        <Suspense fallback={null}>
          <Model_Result onClick={() =>
            BubbleData()
          }/>
        </Suspense>
        <Rig />
      </Canvas>
      
    </div>
  )
}