import React from 'react'
import './css.styl'
class UserInfo extends React.Component {
  render() {
    return (
      <div className="userinfo-container">
        <p>
          <i className="icon-user" />
          &nbsp;
          <span>{this.props.username}</span>
        </p>
        <p>
          <i className="icon-map-marker" />
          &nbsp;
          <span>{this.props.city}</span>
        </p>
      </div>
    )
  }
}
export default UserInfo
