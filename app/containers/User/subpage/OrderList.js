import React from 'react'
import './css.styl'
import {getOrderListData, postComment} from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList'
class OrderList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.submitComment = this.submitComment.bind(this)
  }
  render() {
    return (
      <div>
        <div className="order-list-container">
          <h2>你的订单</h2>
          {this.state.data.length ? (
            <OrderListComponent
              data={this.state.data}
              submitComment={this.submitComment}
            />
          ) : (
            ''
          )}
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
  submitComment(id, value, callback) {
    console.log('id:', id, value, callback)
    const result = postComment(id, value)
    result
      .then(res => {
        return res.json()
      })
      .then(json => {
        if (json.errno === 0) {
          callback()
        }
      })
  }
}
export default OrderList
