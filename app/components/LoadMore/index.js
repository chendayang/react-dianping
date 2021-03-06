import React from 'react'
import './css.styl'

class LoadMore extends React.Component {
  constructor(props) {
    super(props)
    this.loadMoreHandle = this.loadMoreHandle.bind(this)
  }
  render() {
    return (
      <div className="load-more" ref="wrapper">
        {this.props.isLoadingMore ? (
          <span>加载中</span>
        ) : (
          <span onClick={this.loadMoreHandle}>加载更多</span>
        )}
      </div>
    )
  }
  loadMoreHandle() {
    this.props.loadMoreFn()
  }
  componentDidMount() {
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId
    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if (top && top < windowHeight) {
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', () => {
      if (this.props.isLoadingMore) {
        return
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        callback()
      }, 50)
    })
  }
}
export default LoadMore
