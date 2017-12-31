import React from 'react'
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.changeFn = this.changeFn.bind(this)
    this.keyUpFn = this.keyUpFn.bind(this)
  }
  changeFn(e) {
    let val = e.target.value
    this.setState({
      value: val
    })
  }
  keyUpFn(e) {
    const value = this.state.value
    if (e.keyCode === 13 && value.trim()) {
      this.props.submitFn(value)
      this.setState({value: ''})
    }
  }
  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.changeFn}
          onKeyUp={this.keyUpFn}
        />
      </div>
    )
  }
}
export default Input
