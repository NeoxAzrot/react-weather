import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './SingleCity.module.sass'

const SingleCity = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      <Helmet>
        <title>Single City</title>
      </Helmet>
      
      <div className={styles.container}>
        <p>Single City</p>
      </div>
    </Layout>   
  )
}

export default SingleCity
