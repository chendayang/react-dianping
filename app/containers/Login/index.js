import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import LoginComponent from '../../components/Login'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checking: true
    }
    this.loginHandle = this.loginHandle.bind(this)
  }
  render() {
    return (
      <div>
        <Header title="登录" />
        {this.state.checking ? (
          <div>检查中...</div>
        ) : (
          <LoginComponent loginHandle={this.loginHandle} />
        )}
      </div>
    )
  }
  componentDidMount() {
    this.doCheck()
  }
  doCheck() {
    const userInfo = this.props.userInfo
    if (userInfo.username) {
      this.goUserPage()
    } else {
      this.setState({
        checking: false
      })
    }
  }
  loginHandle(username) {
    console.log('name:', username)
    // 登录后处理
    const actions = this.props.userInfoActions
    let userInfo = this.props.userInfo
    userInfo.username = username
    actions.update(userInfo)
    const params = this.props.match.params
    const router = params.router
    if (router) {
      this.props.history.push(router)
    } else {
      this.goUserPage()
    }
  }
  goUserPage() {
    this.props.history.push('/user')
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
