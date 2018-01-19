import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const userInfo = this.props.userInfo
    console.log('userInfo:', userInfo)
    return (
      <div>
        <Header title="用户中心" />
        <UserInfo username={userInfo.username} city={userInfo.cityName} />
        <OrderList username={userInfo.username} />
      </div>
    )
  }
  componentDidMount() {
    if (!this.props.userInfo.username) {
      this.props.history.push('/login')
    }
  }
}
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))
