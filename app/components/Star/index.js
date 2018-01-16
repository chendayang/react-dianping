import React from 'react'
import './css.styl'
class Star extends React.Component {
  render() {
    var arr = [1, 2, 3, 4, 5]
    var star = this.props.star || 0
    if (star > 5) {
      star = star % 5
    }
    return (
      <div className="star-container">
        {arr.map((item, index) => {
          const lightClass = star >= item ? 'light' : ''
          return <i key={index} className={'icon-star ' + lightClass} />
        })}
      </div>
    )
  }
}

export default Star
