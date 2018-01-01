import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators, dispatch} from 'redux'

import * as userInfoActions from '../../actions/userInfo'
class Hello extends React.Component {
  constructor() {
    super()
    this.cahngeUserInfo = this.cahngeUserInfo.bind(this)
  }
  cahngeUserInfo() {
    const actions = this.props.userInfoActions
    actions.login({
      userid: '123',
      city: 'nanjing'
    })
  }
  render() {
    return (
      <div>
        <p>hello component</p>
        <p>{this.props.userInfo.userid}</p>
        <p>{this.props.userInfo.city}</p>
        <button onClick={this.cahngeUserInfo}>改变</button>
      </div>
    )
  }
  componentDidMount() {
    this.props.userInfoActions.login({
      userid: 'abc',
      city: 'beijign'
    })
  }
}
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello)
