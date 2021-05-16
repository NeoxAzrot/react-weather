import React from "react"
import styles from './NextCard.module.sass'

const NextCard = (props) => {
  const { data } = props
  
  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.image} alt={data.alt} />
      <p className={styles.temperature}>{data.temperature}°C</p>
      
      <div className={styles.hour__container}>
        <p className={styles.hour}>{data.hour}</p>
      </div>
    </div>
  )
}

export default NextCard