import React from 'react'
import {render} from 'react-dom'

import Hello from './containers/Hello'
import './static/css/common.less'
import Perf from 'react-addons-perf'
if (__DEV__) {
  console.log('perf')
  window.Perf = Perf
} else {
  console.log('not perf')
}

render(<Hello />, document.getElementById('root'))
