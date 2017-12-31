import React from 'react'
class List extends React.Component {
  constructor(props) {
    super(props)
  }
  clickHander(id) {
    this.props.handleDelete(id)
  }
  render() {
    const data = this.props.lists
    return (
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index} onClick={this.clickHander.bind(this, item.id)}>
              {item.text}
            </li>
          )
        })}
      </ul>
    )
  }
}
export default List
