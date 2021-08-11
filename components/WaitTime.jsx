import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
export default function WaitTime(){
    const [waitTime, setWaitTime] = useState(null)
    useEffect(()=>{
            const TimeRemaining = Date.parse(window.localStorage.getItem('Date')) - Date.now()
            setWaitTime(TimeRemaining>0?TimeRemaining:0)
        setInterval(() => {
            const TimeRemaining = Date.parse(window.localStorage.getItem('Date')) - Date.now()
            setWaitTime(TimeRemaining>0?TimeRemaining:0)
        }, 1000);
    },[])

    const unitsTimeInMs = {
        "day": 1000*60*60*24,
        "hour": 1000*60*60,
        "minute": 1000*60,
        "second": 1000,
    }
    const getTimeFormat = () =>{
        if(!waitTime) return "0"
        let wait = waitTime
        let dateString = ``
        let days;
        Object.entries(unitsTimeInMs).forEach(([unit, value]) => {
            const timesDate = Math.floor(wait/value)
            wait -= value*timesDate
            if(timesDate > 0){
                if(unit === "day"){
                    days = <p>{timesDate} days</p>
                } else {
                    dateString+=`${timesDate}:`
                }
            }
        })
        dateString = dateString.substring(0, dateString.length-1)
        dateString = <p>{dateString}</p>
        return <>{days}{dateString}</>
    }
    return <div className={styles.waitTime}>{getTimeFormat()}</div>
}