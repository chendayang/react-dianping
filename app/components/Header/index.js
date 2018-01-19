import React from 'react'
import {withRouter} from 'react-router-dom'
import './css.styl'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }
  clickHandle() {
    const backRouter = this.props.title
    if (backRouter) {
      this.props.history.push('/')
    } else {
      window.history.back()
    }
  }
  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHandle}>
          <i className="icon-chevron-left" />
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
export default withRouter(Header)
