import React from "react"
import styles from './HeaderSingleCity.module.sass'
import Search from 'components/Search'
import Arrow from 'icons/Arrow'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const HeaderSingleCity = (props) => {
  const { city } = props

  // For the date
  const today = new Date()
  const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
      ]
  
  return (
    <div className={styles.container}>
      <div className={styles.arrow__text}>
        <Link to='/' className={styles.arrow}>
          <Arrow />
        </Link>
        <div>
          <h2>Today, {today.getDate()} <span className={styles.month}>{months[today.getMonth()]}</span></h2>
          <h1>{city}</h1>
        </div>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
    </div>
  )
}

HeaderSingleCity.propTypes = {
  city: PropTypes.string
}

export default HeaderSingleCity