import React from 'react'
import './css.styl'
class Item extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="order-item-container">
        <div className="clear-fix">
          <div className="order-item-img float-left">
            <img src="" />
          </div>
          <div className="order-item-content">
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Item
