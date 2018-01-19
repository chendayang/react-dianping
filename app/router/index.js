import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React from 'react'

import Index from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Login from '../containers/Login'
import Search from '../containers/Search'
import User from '../containers/User'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

class RouteMap extends React.Component {
  render() {
    return (
      <div className="layout">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login/:router?" component={Login} />
            <Route exact path="/city" component={City} />
            <Route path="/user" component={User} />
            <Route exact path="/search/:type/:keyword?" component={Search} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default RouteMap
