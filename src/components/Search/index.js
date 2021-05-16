import React, { useState } from "react"
import styles from './Search.module.sass'
import SearchIcon from 'icons/Search'

const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false)

  const handleClick = () => {
    setSearchClicked(!searchClicked)
    document.getElementById('city').focus()
  }
  
  return (
    <div className={styles.container}>
      <form action='single-city' method='GET' className={`${searchClicked ? styles.active : ''}`}>
        <input className={styles.input} type="text" id="city" name="city" placeholder="Enter your city here" autoComplete="off" />
      </form>
      
      <div className={styles.icon} onClick={handleClick}>
        <SearchIcon />
      </div>

      {/* <div className={styles.suggestions}>

      </div> */}
    </div>
  )
}

export default Search