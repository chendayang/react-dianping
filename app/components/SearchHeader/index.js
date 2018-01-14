import React from 'react'
import SearchInput from '../SearchInput'
import {withRouter} from 'react-router-dom'
import './css.styl'
class SearchHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleBack = this.handleBack.bind(this)
    this.enterHandle = this.enterHandle.bind(this)
  }
  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.handleBack}>
          <i className="icon-chevron-left" />
        </span>
        <div className="input-container">
          <i className="icon-search" />
          &nbsp;
          <SearchInput
            value={this.props.keyword || ''}
            enterHandle={this.enterHandle}
          />
        </div>
      </div>
    )
  }
  handleBack() {
    this.props.history.push('/')
  }
  enterHandle(value) {
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
}

export default withRouter(SearchHeader)
