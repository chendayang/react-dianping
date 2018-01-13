import React from 'react'
import './index.styl'
import {Link} from 'react-router-dom'
class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span style={{color:'#fff'}}>
              {this.props.cityName}
              <i className="icon-angle-down" />
            </span>
          </Link>
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
