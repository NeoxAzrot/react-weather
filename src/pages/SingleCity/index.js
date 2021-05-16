import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './SingleCity.module.sass'
import { useLocation } from 'react-router-dom'
import HeaderSingleCity from 'components/HeaderSingleCity'
import MeteoMoreInfo from 'components/MeteoMoreInfo'
import NextCard from 'components/NextCard'
import MeteoImage from 'components/MeteoImage'

const SingleCity = () => {
  const [meteoMoreInfos, setMeteoMoreInfos] = useState([])
  const [nextDays, setNextDays] = useState([])
  const [temperature, setTemperature] = useState()
  const [image, setImage] = useState()
  const [weatherInformation, setWeatherInformation] = useState()

  // Function to redirect at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get current city
  const query = new URLSearchParams(useLocation().search)
  const city = query.get('city')

  // Variables to fetch
  const key = process.env.REACT_APP_API_KEY
  let url

  // Fetch actual weather
  useEffect(() => { // eslint-disable-next-line
    url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

    fetch(`${url}&q=${city}&appid=${key}`)
    .then((resp) => resp.json())
    .then(function(data) {
      setTemperature(data.main.temp.toFixed(1))
      setImage(data.weather[0])
      setWeatherInformation(data.weather[0].main)

      addMoreInfos(data)
    })
    .catch(function(error) {
      console.log(error)
      window.location.replace('/error-404') // Redirect to error 404
    }) // eslint-disable-next-line 
  }, [])

  // Function to add informations
  const addMoreInfos = (data) => {
    setMeteoMoreInfos([
      {
        name: 'Wind',
        image: 'images/wind/42.png',
        alt: 'Symbolizes the wind',
        info: `${(data.wind.speed * 3.6).toFixed(2)} km/h` // To convert in km/h
      },
      {
        name: 'Humidity',
        image: 'images/cloud/7.png',
        alt: 'Symbolizes clouds',
        info: `${data.main.humidity} %`
      },
      {
        name: 'Feels like',
        image: 'images/sun/26.png',
        alt: 'Symbolizes the sun',
        info: `${data.main.feels_like.toFixed(1)}°C`
      }
    ])
  }

  // Fetch nextHours weather
  useEffect(() => { // eslint-disable-next-line
    url = 'https://api.openweathermap.org/data/2.5/forecast?units=metric'

    fetch(`${url}&q=${city}&appid=${key}`)
    .then((resp) => resp.json())
    .then(function(data) {
      addNextDays(data)
    })
    .catch(function(error) {
      console.log(error)
    }) // eslint-disable-next-line 
  }, [])

  // Function to add next hours stats
  const addNextDays = (data) => {
    const actualDate = formatDate(new Date())
    let showMidnight = true

    data.list.forEach(dataList => {
      const date = dataList.dt_txt
      const dateWithoutHour = date.split(' ')[0]
      const dateHour = date.split(' ')[1].split(':')

      if(dateWithoutHour === actualDate || showMidnight ) {
        setNextDays(
          nextDays => nextDays.concat({
            temperature: dataList.main.temp.toFixed(1),
            image: dataList.weather[0],
            hour: `${dateHour[0]}:${dateHour[1]}`
          })
        )
      }

      if(dateWithoutHour !== actualDate) showMidnight = false // To only show the first midnight
    })
  }

  // Function to format the date
  const formatDate = (date) => {
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    // Add 0 to get the good format
    if(month < 10) {
      month = '0' + month
    }
    if(day < 10) {
      day = '0' + day
    }

    const formatActualDate = `${year}-${month}-${day}`
    return formatActualDate
  }
  
  return (
    <Layout>
      <Helmet>
        <title>React weather | {city}</title>
      </Helmet>
      
      <div className={styles.container}>
        <HeaderSingleCity city={city} />

        <div className={styles.meteo}>
          <div className={styles.meteo__actual}>
            <div className={styles.meteo__main_info}>
              <div className={styles.image}>
                <MeteoImage weather={image} />
              </div>
              <div className={styles.meteo__main_info__text}>
                <h3>{temperature}°C</h3>
                <h4>{weatherInformation}</h4>
              </div>
            </div>
            <div className={styles.meteo__more_infos}>
              {meteoMoreInfos.map((meteoMoreInfo, index) => {
                return (
                  <div key={index} className={styles.meteo__more_info}>
                    <MeteoMoreInfo data={meteoMoreInfo} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.meteo__next_hours}>
            {nextDays.map((nextDay, index) => {
              return (
                <div key={index} className={styles.meteo__next_hour}>
                  <NextCard data={nextDay} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>   
  )
}

export default SingleCity
