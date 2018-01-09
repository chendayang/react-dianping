import React from 'react'
import {Route, Switch} from 'react-router-dom'
import UserList from '../containers/User/UserList'
import UserDetail from '../containers/User/UserDetail'
class User extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={this.props.match.path} exact component={UserList} />
          <Route
            path={`${this.props.match.path}/:userId`}
            component={UserDetail}
          />
        </Switch>
      </div>
    )
  }
}

export default User
