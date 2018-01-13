import React from 'react'
import './css.styl'
import Item from './Item/Item'

class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data
    console.log('data:', data)
    return (
      <div className="list-container">
        {data.map((item, index) => {
          return <Item key={index} data={item} />
        })}
      </div>
    )
  }
}
export default List
