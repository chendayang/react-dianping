import React from 'react'
import Header from '../components/Header/Header'
import Input from '../components/Input'
import List from '../components/List'
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteFn = this.deleteFn.bind(this)
  }
  handleSubmit(v) {
    let id = this.state.todos.length
    this.setState({
      todos: this.state.todos.concat({id: id, text: v})
    })
  }
  deleteFn(id) {
    let data = this.state.todos
    this.setState({
      todos: data.filter(item => {
        return item.id !== id
      })
    })
  }
  render() {
    return (
      <div>
        <Input submitFn={this.handleSubmit} />
        <List lists={this.state.todos} handleDelete={this.deleteFn} />
      </div>
    )
  }
}

export default TodoList
