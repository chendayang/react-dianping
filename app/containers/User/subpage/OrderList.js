import React from 'react'
import './css.styl'
import {getOrderListData} from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList'
class OrderList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
        <div className="order-list-container">
          <h2>你的订单</h2>
          {this.state.data.length ? <OrderListComponent data={this.state.data} /> : ''}
        </div>
      </div>
    )
  }
  componentDidMount() {
    const username = this.props.username
    if (username) {
      this.loadOrderList(username)
    }
  }
  loadOrderList(username) {
    const result = getOrderListData(username)
    result
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({
          data: json
        })
      })
  }
}
export default OrderList
