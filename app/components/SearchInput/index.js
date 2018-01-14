import React from 'react'
import './css.styl'
class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  render() {
    return (
      <input
        className="search-input"
        type="text"
        value={this.state.value}
        placeholder="请输入关键字"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
      />
    )
  }
  handleChange(e) {
    var val = e.target.value
    this.setState({
      value: val
    })
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }

  handleKeyUp(e) {
    if (e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(this.state.value)
  }
}
export default SearchInput
