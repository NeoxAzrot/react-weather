import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './Error404.module.sass'
import Header from 'components/Header'

const Error404 = () => {

  // Function to redirect at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      <Helmet>
        <title>React weather | Error 404</title>
      </Helmet>
      
      <div className={styles.container}>
       <Header showArrow={true} />

        <div className={styles.error404}>
          <h1>Error 404</h1>
          <img src='images/cloud/17.png' alt='Symbolizes a storm.' />
        </div>
      </div>
    </Layout>   
  )
}

export default Error404
