import React from 'react'
class Header extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
export default Header
