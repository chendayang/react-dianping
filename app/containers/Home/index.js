import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import {connect} from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName} />
        <Category />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
