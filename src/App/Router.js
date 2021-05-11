// Importation des fichiers
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from 'pages/Home'
import SingleCity from 'pages/SingleCity'
import Error404 from 'pages/Error404'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/single-city">
          <SingleCity />
        </Route>

        <Route exact path="/error-404">
          <Error404 />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <Error404 />
        </Route>

        <Redirect to="/error-404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router