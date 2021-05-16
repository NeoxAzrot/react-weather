import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import styles from './Error404.module.sass'

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
        <p>Error 404</p>
      </div>
    </Layout>   
  )
}

export default Error404
