import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import RouteMap from '../router'

const App = () => {
  return (
    <div>
      <Header title="hello world!" />
      <RouteMap />
    </div>
  )
}
export default App
