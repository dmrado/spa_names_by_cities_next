import React from 'react'
import { getUsers } from './api'
import Paper from '@material-ui/core/Paper'
// import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'

class UsersList extends React.Component {
  state = {
    users: null
  }

  componentDidMount() {
    getUsers({
      success: response => this.setState({
        users: response
      }),
      error: () => {},
      user_ids: this.props.user_ids
    })
  }

  render() {
    const { users } = this.state

    if(!users) {
      return <LinearProgress/>
    }

    return (
      <Paper className="p-15">
        <h3>{ 'Имена пользователей: ' + this.props.user_ids }</h3>
        { users.map(user => (
          <div className="user" key={ user.id }>
            { user.first_name + ' ' + user.last_name }
          </div>
        ))}
      </Paper>
    )
  }
}

export default UsersList