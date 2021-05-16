import React from "react"
import styles from './CityCard.module.sass'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MeteoImage from 'components/MeteoImage'

const CityCard = (props) => {
  const { city } = props
  
  return (
    <Link to={city.link} className={styles.container}>
      <div className={styles.card__header}>
        <h3 className={styles.card__city}>{city.name}</h3>
        <p className={styles.card__date}>{city.date}</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__image}>
          <MeteoImage weather={city.image} />
        </div>
        <p className={styles.card__temperature}>{city.temperature}°C</p>
      </div>
    </Link>
  )
}

CityCard.propTypes = {
  city: PropTypes.object
}

export default CityCard