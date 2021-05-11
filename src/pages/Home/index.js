import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './Home.module.sass'

const Home = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <div className={styles.container}>
        <p>Home</p>
      </div>
    </Layout>   
  )
}

export default Home
