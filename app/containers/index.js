import React from 'react'
import RouteMap from '../router'
import Header from '../components/Header/Header'

const App = () => {
  return (
    <div className="app">
      <Header title="hello world" />
      <RouteMap />
      <p>footer</p>
    </div>
  )
}
export default App
