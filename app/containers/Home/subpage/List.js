import React from 'react'
import {getListData} from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List'
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMore: false,
      data: []
    }
  }
  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {this.state.data.length?
        <ListComponent data={this.state.data}></ListComponent>:<div>加载中...</div>}
      </div>
    )
  }
  componentDidMount() {
    this.loadFirstPageData()
  }
  loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this.resultHandle(result)
  }
  resultHandle(result) {
    result
      .then(res => {
        return res.json()
      })
      .then(json => {
        const hasMore = json.hasMore
        const data = json.data
        this.setState({
          hasMore: hasMore,
          data: data
        })
      })
  }
}
export default List
