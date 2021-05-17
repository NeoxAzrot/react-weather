import React, { useState } from "react"
import styles from './Search.module.sass'
import SearchIcon from 'icons/Search'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false)
  const [autocompleteValue, setAutocompleteValue] = useState()
  const [placeValue, setPlaceValue] = useState('')

  const key = process.env.REACT_APP_GOOGLE_API_KEY
  const input = document.getElementById('react-select-3-input') // ID in the DOM
  const form = document.getElementById('search-form')

  // Function to handle when we click on the search icon
  const handleClick = () => {
    setSearchClicked(!searchClicked)

    // To prevent errors
    if(input) {
      input.focus()
    }
  }

  // Function to handle the change when we click on a autocomplete place
  const handleChange = (place) => {
    setAutocompleteValue(place)
    changePlaceValue(place)
  }

  // Function to change the hidden input for the query
  const changePlaceValue = (place) => {
    const city = place.value.terms[0].value
    console.log(place)
    
    setPlaceValue(city)

    // To execute the submit at the end
    setTimeout(() => {
      form.submit()
    }, 1)
  }
  
  return (
    <div className={styles.container}>
      <form id='search-form' action='single-city' method='GET' className={`${searchClicked ? styles.active : ''}`}>
        <input type="hidden" id="city" name="city" value={placeValue} />
        <GooglePlacesAutocomplete
          apiKey={key}
          apiOptions={{ language: 'en', region: 'US' }}
          autocompletionRequest={{
            types: ['(cities)']
          }}
          selectProps={{
            autocompleteValue,
            onChange: handleChange,
            placeholder: 'Enter your city here',
            styles: {
              container: (provided) => ({
                ...provided,
                marginRight: '1rem'
              }),
              control: (provided) => ({
                ...provided,
                border: 'none',
                '&:hover': {
                  background: 'transparent',
                  border: 'none'
                }
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                background: '#053581',
                height: '100%',
                color: '#ffffff',
                paddingBottom: '9px',
                paddingTop: '9px',
                cursor: 'pointer',
                '&:hover': {
                  color: '#C6CADF'
                }
              }),
              indicatorSeparator: () => ({
                display: 'none'
              }),
              input: (provided) => ({
                ...provided,
                outline: 'none',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid #ffffff',
                width: '20rem',
                color: '#ffffff',
                fontSize: '1.8rem'
              }),
              loadingIndicator: () => ({
                display: 'none'
              }),
              loadingMessage: (provided) => ({
                ...provided,
                color: '#ffffff',
                background: '#053581'
              }),
              menu: (provided) => ({
                ...provided,
                background: '#053581'
              }),
              noOptionsMessage: (provided) => ({
                ...provided,
                color: '#ffffff',
                background: '#053581'
              }),
              option: (provided) => ({
                ...provided,
                color: '#ffffff',
                background: '#053581',
                cursor: 'pointer',
                '&:hover': {
                  color: '#C6CADF'
                }
              }),
              placeholder: (provided) => ({
                ...provided,
                color: '#ffffff',
                opacity: .7,
                fontSize: '1.8rem',
                cursor: 'text'
              }),
              singleValue: (provided) => ({
                ...provided,
                outline: 'none',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid #ffffff',
                width: '20rem',
                color: '#ffffff',
                fontSize: '1.8rem'
              }),
              valueContainer: (provided) => ({
                ...provided,
                background: '#053581'
              })
            },
          }}
        />
      </form>
      
      <div className={styles.icon} onClick={handleClick}>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search