import React from "react"
import styles from './Header.module.sass'
import Search from 'components/Search'
import Arrow from 'icons/Arrow'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { showArrow } = props

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

  // For the message
  const actualHour = today.getHours()
  const messages = [
    {
      text: 'Good morning',
      startHour: 6
    },
    {
      text: 'Good afternoon',
      startHour: 12
    },
    {
      text: 'Good evening',
      startHour: 17
    }
  ]

  let actualMessage = null
  const getMessage = (hour) => {
    if(hour < messages[0].startHour) {
      actualMessage = messages[messages.length - 1].text
    }
    messages.forEach(message => {
      if(hour >= message.startHour) {
        actualMessage = message.text
      }
    })
  }

  getMessage(actualHour)
  
  return (
    <div className={styles.container}>
      <div className={styles.arrow__text}>
        {showArrow && (
          <Link to='/' className={styles.arrow}>
            <Arrow />
          </Link>
        )}
        <div>
          <h1>{actualMessage}</h1>
          <h2>Today, {today.getDate()} <span className={styles.month}>{months[today.getMonth()]}</span></h2>
        </div>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
    </div>
  )
}

Header.propTypes = {
  showArrow: PropTypes.bool
}

Header.defaultProps = {
  showArrow: false
}

export default Header