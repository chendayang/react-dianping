import React from 'react'
import './css.styl'
class BuyAndStore extends React.Component {
  constructor(props) {
    super(props)
    this.storeClick = this.storeClick.bind(this)
    this.buyClick = this.buyClick.bind(this)
  }
  render() {
    return (
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {this.props.isStore ? (
            <button onClick={this.storeClick}>已收藏</button>
          ) : (
            <button onClick={this.storeClick}>收藏</button>
          )}
        </div>
        <div className="item-container float-right">
          <button onClick={this.buyClick}>购买</button>
        </div>
      </div>
    )
  }
  storeClick() {
    this.props.storeHandle()
  }
  buyClick() {
    this.props.buyHandle()
  }
}

export default BuyAndStore
