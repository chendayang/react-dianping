import React from 'react'
import RouteMap from '../router'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userInfo'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <RouteMap />
      </div>
    )
  }
  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })
  }
}
function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
