import React from 'react'
import {getListData} from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
}
class SearchList extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.loadMoreData = this.loadMoreData.bind(this)
  }
  render() {
    return (
      <div>
        {this.state.data.length ? (
          <ListComponent data={this.state.data} />
        ) : (
          <div>加载中...</div>
        )}
        {this.state.hasMore ? (
          <LoadMore
            isLoadingMore={this.state.isLoadingMore}
            loadMoreFn={this.loadMoreData}
          />
        ) : (
          ''
        )}
      </div>
    )
  }

  componentDidMount() {
    this.loadFirstPageData()
  }
  // componentDidUpdate(prevProps, prevState) {
    // console.log('update')
    // const category = this.props.category
    // const keyword = this.props.keyword || ''
    // console.log('category:', category)
    // if (keyword === prevProps.keyword && category === prevProps.category) {
    //   return
    // }
    // this.setState(initialState)
    // this.loadFirstPageData()
  // }
  loadFirstPageData() {
    const cityName = this.props.cityName
    const category = this.props.category
    const keyword = this.props.keyword || ''
    const result = getListData(cityName, 0, category, keyword)
    this.resultHandle(result)
  }
  loadMoreData() {
    console.log('loadmore')
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    this.resultHandle(result)
    this.setState({
      page: page + 1,
      isLoadingMore: false
    })
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
          data: this.state.data.concat(data)
        })
      })
  }
}

export default SearchList
