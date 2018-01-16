import React from 'react'
import {getInfoData, getCommentData} from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo'
class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: false
    }
  }
  render() {
    return <div>{this.state.info ? <DetailInfo info={this.state.info} /> : <div>加载中...</div>}</div>
  }
  componentDidMount() {
    var id = this.props.id
    var result = getInfoData(id)
    result
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({
          info: json
        })
      })
  }
}

export default Info
