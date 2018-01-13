import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'

class City extends React.Component {
  constructor(props) {
    super(props)
    this.changeCity = this.changeCity.bind(this)
  }
  render() {
    return (
      <div>
        <Header title="选择城市" />
        <CurrentCity cityName={this.props.userInfo.cityName} />
        <CityList changeFn={this.changeCity} />
      </div>
    )
  }
  componentDidMount() {
    // console.log('userinfo:', this.props.userInfo)
    // console.log('userinfo:', this.props.userInfoActions)
  }
  changeCity(newCity) {
    if (newCity == null) {
      return
    }
    console.log('newCity:', newCity)
    const userInfo = this.props.userInfo
    userInfo.cityName = newCity
    this.props.userInfoActions.update(userInfo)
    localStorage.setItem(CITYNAME, newCity)
    window.history.back()
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
