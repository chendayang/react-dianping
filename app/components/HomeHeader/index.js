import React from 'react'
import './index.styl'
import SearchInput from '../SearchInput'
import {Link, withRouter} from 'react-router-dom'

class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
    this.enterHandle = this.enterHandle.bind(this)
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span style={{color: '#fff'}}>
              {this.props.cityName}
              <i className="icon-angle-down" />
            </span>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to="/login">
            <i className="icon-user" style={{color:'#fff'}} />
          </Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <SearchInput value="" enterHandle={this.enterHandle} />
          </div>
        </div>
      </div>
    )
  }

  enterHandle(value) {
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
}
export default withRouter(HomeHeader)
