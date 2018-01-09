import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'
import App from './containers'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
