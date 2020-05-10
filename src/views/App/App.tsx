import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CV from '@/views/CV'
import Iteam from '@/views/Iteam'
import NotFound from '@/views/NotFound'

import css from './App.css'

export const App = () => {
  const routeCV: IRoute = () => <CV />
  const routeIteam: IRoute = () => <Iteam />
  const route404: IRoute = () => <NotFound />

  return (
    <div className={css.app}>
      <Router>
        <Switch>
          <Route path="/" exact component={routeCV} />
          <Route path="/iteam" exact component={routeIteam} />
          <Route component={route404} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
