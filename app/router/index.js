import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React from 'react'

import Index from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import UserRouter from './UserRouter'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

const RouteMap = () => (
  <div className="layout">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={City} />
        <Route path="/user" component={UserRouter} />
        <Route exact path="/search/:type(/:keyword)" component={Search} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </div>
)
export default RouteMap
