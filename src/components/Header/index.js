import React from "react"
import styles from './Header.module.sass'
import Search from 'components/Search'

const Header = () => {

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
      <div>
        <h1>{actualMessage}</h1>
        <h2>Today, {today.getDate()} <span className={styles.month}>{months[today.getMonth()]}</span></h2>
      </div>
      <Search />
    </div>
  )
}

export default Header