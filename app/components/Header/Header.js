import React from 'react'
class Header extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.obj.young ? 'yes' : 'no'}</p>
      </div>
    )
  }
}
export default Header
