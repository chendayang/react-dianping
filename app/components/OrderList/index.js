import React from 'react'
import './css.styl'
import Item from './Item'
class OrderList extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        {data.map((item, index) => {
          return <Item key={index} data={item}></Item>
        })}
      </div>
    )
  }
}
export default OrderList
