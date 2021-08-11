import styles from '../styles/Home.module.css'
import DatePicker from '../components/DatePicker'
import WaitTime from '../components/WaitTime'
import { useEffect, useRef, useState } from 'react'
export default function Home() {
  const [bgImage,setBgImage] = useState('waitingForTheBus.jpg')
  const $container = useRef(null)
  useEffect(()=>{
    let rdm = Math.random()
    let bgImage = rdm>1/3?rdm<2/3?'waitingForTheBus.jpg':'waitingTheSun.jpg':'waitingRain.png'
    $container.current.style.background = `url(${bgImage}) no-repeat center/cover`
    setBgImage(bgImage)
  },[])
  return (
    <div ref={$container} className={styles.container} onLoad={(e)=>{console.log("hola")}}>
      <DatePicker/>
      <WaitTime/>
    </div>
  )
}
