import React from "react"
import styles from './NextCard.module.sass'
import PropTypes from 'prop-types'
import MeteoImage from 'components/MeteoImage'

const NextCard = (props) => {
  const { data } = props
  
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <MeteoImage weather={data.image} pod={data.pod} />
      </div>
      <p className={styles.temperature}>{data.temperature}°C</p>
      
      <div className={styles.hour__container}>
        <p className={styles.hour}>{data.hour}</p>
      </div>
    </div>
  )
}

NextCard.propTypes = {
  data: PropTypes.object
}

export default NextCard