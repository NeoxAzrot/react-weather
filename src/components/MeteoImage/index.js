import React from "react"
import PropTypes from 'prop-types'

const MeteoImage = (props) => {
  const { weather } = props

  // Array to convert every id to an image
  const idToImage = [
    {
      id: 200,
      day: 'images/sun/16.png',
      night: 'images/moon/11.png'
    },
    {
      id: 201,
      day: 'images/cloud/17.png',
      night: 'images/moon/11.png'
    },
    {
      id: 202,
      day: 'images/cloud/17.png',
      night: 'images/moon/11.png'
    },
    {
      id: 210,
      day: 'images/cloud/12.png',
      night: 'images/moon/11.png'
    },
    {
      id: 211,
      day: 'images/cloud/12.png',
      night: 'images/moon/11.png'
    },
    {
      id: 212,
      day: 'images/cloud/12.png',
      night: 'images/moon/20.png'
    },
    {
      id: 221,
      day: 'images/cloud/12.png',
      night: 'images/moon/20.png'
    },
    {
      id: 230,
      day: 'images/cloud/17.png',
      night: 'images/moon/11.png'
    },
    {
      id: 231,
      day: 'images/cloud/17.png',
      night: 'images/moon/11.png'
    },
    {
      id: 232,
      day: 'images/cloud/17.png',
      night: 'images/moon/20.png'
    },
    {
      id: 300,
      day: 'images/sun/8.png',
      night: 'images/moon/2.1.png'
    },
    {
      id: 301,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 302,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 310,
      day: 'images/sun/8.png',
      night: 'images/moon/2.1.png'
    },
    {
      id: 311,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 312,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 313,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 314,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 321,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 500,
      day: 'images/sun/8.png',
      night: 'images/moon/1.png'
    },
    {
      id: 501,
      day: 'images/sun/8.png',
      night: 'images/moon/1.png'
    },
    {
      id: 502,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 503,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 504,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 511,
      day: 'images/cloud/22.png',
      night: 'images/moon/21.png'
    },
    {
      id: 520,
      day: 'images/sun/8.png',
      night: 'images/moon/1.png'
    },
    {
      id: 521,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 522,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 531,
      day: 'images/cloud/7.png',
      night: 'images/moon/1.png'
    },
    {
      id: 600,
      day: 'images/cloud/18.png',
      night: 'images/moon/19.png'
    },
    {
      id: 601,
      day: 'images/cloud/18.png',
      night: 'images/moon/19.png'
    },
    {
      id: 602,
      day: 'images/cloud/18.png',
      night: 'images/moon/19.png'
    },
    {
      id: 611,
      day: 'images/cloud/23.png',
      night: 'images/moon/19.png'
    },
    {
      id: 612,
      day: 'images/cloud/23.png',
      night: 'images/moon/19.png'
    },
    {
      id: 613,
      day: 'images/cloud/23.png',
      night: 'images/moon/19.png'
    },
    {
      id: 615,
      day: 'images/cloud/22.png',
      night: 'images/moon/21.png'
    },
    {
      id: 616,
      day: 'images/cloud/22.png',
      night: 'images/moon/21.png'
    },
    {
      id: 620,
      day: 'images/cloud/18.png',
      night: 'images/moon/19.png'
    },
    {
      id: 621,
      day: 'images/cloud/18.png',
      night: 'images/moon/19.png'
    },
    {
      id: 622,
      day: 'images/cloud/18.png',
      night: 'images/moon/19.png'
    },
    {
      id: 701,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 711,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 721,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 731,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 741,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 751,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 761,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 762,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 771,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 781,
      day: 'images/wind/42.png',
      night: 'images/moon/2.2.png'
    },
    {
      id: 800,
      day: 'images/sun/26.png',
      night: 'images/moon/10.png'
    },
    {
      id: 801,
      day: 'images/sun/27.png',
      night: 'images/moon/15.png'
    },
    {
      id: 802,
      day: 'images/cloud/35.png',
      night: 'images/moon/15.png'
    },
    {
      id: 803,
      day: 'images/cloud/35.png',
      night: 'images/moon/15.png'
    },
    {
      id: 804,
      day: 'images/cloud/35.png',
      night: 'images/moon/15.png'
    }
  ]

  let link

  // Function to check which image we have to take depend of the id
  const convertIdToImage = () => {
    const actualHour = new Date().getHours()

    idToImage.forEach(array => {
      if(weather.id === array.id) {
        if(actualHour < 7 || actualHour >= 20) {
          link = array.night
        } else {
          link = array.day
        }
      }
    })
  }

  convertIdToImage()
  
  return (
    <img src={link} alt={weather.description.charAt(0).toUpperCase() + weather.description.slice(1)} /> // To put the first letter in uppercase
  )
}

MeteoImage.propTypes = {
  weather: PropTypes.object
}

// To prevents errors due to state in single city
MeteoImage.defaultProps = {
  weather: {
    id: '',
    description: ''
  }
}

export default MeteoImage