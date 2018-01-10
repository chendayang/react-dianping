import React from 'react'
import './index.styl'

class HomeAd extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data
    console.log('data:', data)
    return (
      <div>
        <h2>超值特惠</h2>
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                {/* <a href={item.link}>{item.title}</a> */}
                {item.title}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default HomeAd
