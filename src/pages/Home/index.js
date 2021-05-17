import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './Home.module.sass'
import Header from 'components/Header'
import CityCard from 'components/CityCard'

const Home = (props) => {
  const [cities, setCities] = useState([])

  // Function to redirect at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Variables to fetch
  const key = process.env.REACT_APP_WEATHER_API_KEY
  const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

  const preCities = [
    'Paris',
    'New York',
    'Tokyo',
    'Londres',
    'Sydney',
    'San Francisco'
  ]

  // Fetch actual weather
  useEffect(() => {
    preCities.forEach(city => {
      fetch(`${url}&q=${city}&appid=${key}`)
      .then((resp) => resp.json())
      .then(function(data) {
        addCities(data)
      })
      .catch(function(error) {
        console.log(error)
      })
    }) // eslint-disable-next-line 
  }, [])

  const addCities = (data) => {
    setCities(
      cities => cities.concat({
        name: data.name,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        image: data.weather[0],
        temperature: data.main.temp.toFixed(1),
        link: `single-city?city=${data.name}`
      })
    )
  }
  
  return (
    <Layout>
      <Helmet>
        <title>React weather</title>
      </Helmet>
      
      <div className={styles.container}>
        <Header />

        <div className={styles.cards__container}>
          <p className={styles.card__header}>Predefined city</p>
          <div className={styles.cards}>
            {cities.map((city, index) => {
              return (
                <div key={index} className={styles.card}>
                  <CityCard city={city} />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </Layout>   
  )
}

export default Home
