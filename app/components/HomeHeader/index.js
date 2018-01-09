import React from 'react'
import './index.styl'
class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          {this.props.cityName}<i className="icon-angle-down" />
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <input type="text" placeholder="请输入关键字" />
          </div>
        </div>
      </div>
    )
  }
}
export default HomeHeader
