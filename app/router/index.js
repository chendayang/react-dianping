import {HashRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react'

import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

const RouteMap = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/index">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/index" component={Home} />
      <Route exact path="/list" component={List} />
      <Route exact path="/detail" component={Detail} />
    </div>
  </Router>
)
export default RouteMap
