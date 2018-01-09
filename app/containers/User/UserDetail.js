import React from 'react'
class UserDetail extends React.Component {
  show() {
    console.log('path:', this.props.match)
  }
  componentDidMount() {
    this.show()
  }
  render() {
    return <div>UserDetail</div>
  }
}

export default UserDetail
