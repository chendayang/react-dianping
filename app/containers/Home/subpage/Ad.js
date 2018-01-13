import React from 'react'
import {getAdData} from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd/index.js'
class Ad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
        {this.state.data.length ? (
          <HomeAd data={this.state.data} />
        ) : (
          <div>加载中...</div>
        )}
      </div>
    )
  }
  componentDidMount() {
    const result = getAdData()
    let answer = result
      .then(res => {
        return res.json()
      })
      .then(json => {
        const data = json
        if (data.length) {
          this.setState({
            data: data
          })
        }
      })
  }
}
export default Ad
