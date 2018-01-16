import React from 'react'
import Item from './Item'

import './css.styl'

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // 获取数据
    const data = this.props.data

    return (
      <div className="comment-list">
        {data.map((item, index) => {
          return <Item key={index} data={item} />
        })}
      </div>
    )
  }
}

export default CommentList
