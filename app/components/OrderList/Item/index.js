import React from 'react'
import './css.styl'
class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentState: 2
    }
    this.showComment = this.showComment.bind(this)
    this.submitClick = this.submitClick.bind(this)
    this.hideComment = this.hideComment.bind(this)
    this.commitOK = this.commitOK.bind(this)
  }
  render() {
    const data = this.props.data
    return (
      <div className="order-item-container">
        <div className="clear-fix">
          <div className="order-item-img float-left">
            <img src="" />
          </div>
          <div className="order-item-comment float-right">
            {this.state.commentState === 0 ? (
              <button className="btn" onClick={this.showComment}>
                评价
              </button>
            ) : this.state.commentState === 1 ? (
              ''
            ) : (
              <button className="btn unselected-btn">已评价</button>
            )}
          </div>
          <div className="order-item-content">
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
        {this.state.commentState === 1 ? (
          <div className="comment-text-container">
            <textarea
              style={{width: '100%', height: '80px'}}
              className="comment-text"
              ref="commentText"
            />
            <button className="btn" onClick={this.submitClick}>
              提交
            </button>
            <button className="btn unselected-btn" onClick={this.hideComment}>
              取消
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
  showComment() {
    this.setState({
      commentState: 1
    })
  }
  hideComment() {
    this.setState({
      commentState: 0
    })
  }
  submitClick() {
    const id = this.props.data.id
    const commentTextDOM = this.refs.commentText
    const value = commentTextDOM.value.trim()
    if (!value) {
      return
    }
    const submitComment = this.props.submitComment
    submitComment(id, value, this.commitOK)
  }
  commitOK() {
    this.setState({
      commentState: 2
    })
  }
  componentDidMount() {
    this.setState({
      commentState: this.props.data.commentState
    })
    console.log('state:', this.state.commentState)
  }
}
export default Item
