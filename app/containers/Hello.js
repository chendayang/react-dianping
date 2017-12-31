import React from 'react'
import Header from '../components/Header/Header'
class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      now: Date.now(),
      name: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.setState({
      now: Date.now()
    })
  }
  componentDidMount() {
    console.log('didMount')
    setTimeout(() => {
      this.setState({
        name: 'chen da yang'
      })
    }, 1000)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
  }
  render() {
    const obj = {name: 'chen', age: 28, young: true}
    return (
      <div>
        <p onClick={this.handleClick}>hello world,click to change time.</p>
        {this.state.name.length === 0 ? (
          <p>loading...</p>
        ) : (
          <p>{this.state.name}</p>
        )}

        {/* <Header title="hello页面" obj={obj} /> */}
      </div>
    )
  }
}

export default Hello
