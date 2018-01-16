import React from 'react'
import './css.styl'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      password: ''
    }
    this.changeHandle = this.changeHandle.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
  }
  render() {
    return (
      <div id="login-container">
        <div className="input-container phone-container">
          <i className="icon-tablet" />
          <input
            type="text"
            placeholder="输入手机号"
            onChange={this.changeHandle}
            value={this.state.username}
          />
        </div>
        <div className="input-container password-container">
          <i className="icon-key" />
          <button>发送验证码</button>
          <input type="text" placeholder="输入验证码" />
        </div>
        <button className="btn-login" onClick={this.clickHandle.bind(this)}>
          登录
        </button>
      </div>
    )
  }
  changeHandle(e) {
    this.setState({
      phone: e.target.value
    })
  }
  clickHandle() {
    const username = this.state.phone
    const loginHandle = this.props.loginHandle
    loginHandle(username)
  }
}
export default Login
