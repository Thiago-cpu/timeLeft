import styles from '../styles/Home.module.css'
import DatePicker from '../components/DatePicker'
import WaitTime from '../components/WaitTime'
export default function Home() {
  const rdm = Math.random()
  const bgImage = rdm>1/3?rdm<2/3?'waitingForTheBus.jpg':'waitingTheSun.jpg':'waitingRain.png'
  return (
    <div className={styles.container}>
      <DatePicker/>
      <WaitTime/>
      <style jsx>{`
      div {
        background: url(${bgImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    `}</style>
    </div>
  )
}
