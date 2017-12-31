import React from 'react'
import TodoList from './TodoList'
class Hello extends React.Component {

  render() {
    const obj = {name: 'chen', age: 28, young: true}
    return (
      <div>
        <TodoList/>
      </div>
    )
  }
}

export default Hello
