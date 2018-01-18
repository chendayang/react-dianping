import React from 'react'
import BuyAndStore from '../../../components/BuyAndStore'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as storeActionsFromFile from '../../../actions/store'

class Buy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStore: false
    }
    this.buyHandle = this.buyHandle.bind(this)
    this.storeHandle = this.storeHandle.bind(this)
  }
  render() {
    return (
      <div>
        <BuyAndStore
          isStore={this.state.isStore}
          buyHandle={this.buyHandle}
          storeHandle={this.storeHandle}
          buyHandle={this.buyHandle}
        />
      </div>
    )
  }
  checkStoreState() {
    const id = this.props.id
    const store = this.props.store
    store.some(item => {
      if (item.id === id) {
        this.setState({
          isStore: true
        })
        return true
      }
    })
  }
  componentDidMount() {
    this.checkStoreState()
  }
  buyHandle() {
    const loginFlag = this.loginCheck()
    if (!loginFlag) {
      return
    }
    console.log('buy')
    this.props.history.push('/user')
  }
  storeHandle() {
    const loginFlag = this.loginCheck()
    if (!loginFlag) {
      return
    }
    const id = this.props.id
    const storeActions = this.props.storeActions
    if (this.state.isStore) {
      storeActions.rm({id: id})
    } else {
      storeActions.add({id: id})
    }
    this.setState({
      isStore: !this.state.isStore
    })
  }
  loginCheck() {
    const id = this.props.id
    const userInfo = this.props.userInfo
    console.log('info:', userInfo)
    if (!userInfo.username) {
      this.props.history.push('/login/' + encodeURIComponent('detail/' + id))
      return false
    }
    return true
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    store: state.store
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buy))
