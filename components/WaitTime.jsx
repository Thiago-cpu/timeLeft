import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
export default function WaitTime(){
    const [waitTime, setWaitTime] = useState(null)
    useEffect(()=>{
        setWaitTime(Date.parse(window.localStorage.getItem('Date')) - Date.now())
        setInterval(() => {
            setWaitTime(Date.parse(window.localStorage.getItem('Date')) - Date.now())
        }, 1000);
    },[])

    const getTimeFormat = () =>{
        if(!waitTime) return "0:0:0:0"
        let wait = waitTime
        wait = wait/1000/60/60/24
        const days = Math.floor(wait)
        wait -= Math.floor(wait)
        wait *= 24
        const hours = Math.floor(wait)
        wait -= Math.floor(wait)
        wait *= 60
        const minutes = Math.floor(wait)
        wait -= Math.floor(wait)
        wait*=60
        const seconds = Math.floor(wait)
        return `${days}:${hours}:${minutes}:${seconds}`
    }
    return <p className={styles.waitTime}>{getTimeFormat()}</p>
}