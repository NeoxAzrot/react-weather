import React from "react"
import styles from './MeteoMoreInfo.module.sass'
import PropTypes from 'prop-types'

const MeteoMoreInfo = (props) => {
  const { data } = props
  
  return (
    <div className={styles.container}>
      <p className={styles.name}>{data.name}</p>
      <img className={styles.image} src={data.image} alt={data.alt} />
      
      <div className={styles.info__container}>
        <p className={styles.info}>{data.info}</p>
      </div>
    </div>
  )
}

MeteoMoreInfo.propTypes = {
  data: PropTypes.object
}

export default MeteoMoreInfo