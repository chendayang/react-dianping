import React from 'react'
class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initDone: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initDone: true
      })
    }, 1000)
  }
  render() {
    return <div>{this.state.initDone ? <p>done</p> : <p>加载中...</p>}</div>
  }
}

export default UserList
