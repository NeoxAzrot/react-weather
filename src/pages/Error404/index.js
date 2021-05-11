import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './Error404.module.sass'

const Error404 = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      
      <div className={styles.container}>
        <p>Error 404</p>
      </div>
    </Layout>   
  )
}

export default Error404
