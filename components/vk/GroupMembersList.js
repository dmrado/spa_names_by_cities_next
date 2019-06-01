import React from 'react'
import { getGroupMembers } from './api'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'

class GroupMembersList extends React.Component {
  state = {
    user_ids: null
  }

  componentDidMount() {
    getGroupMembers({
      success: response => this.setState({
        user_ids: response.items
      }),
      error: () => {},
      group_id: this.props.group_id
    })
  }

  render() {
    const { user_ids } = this.state

    if(!user_ids) {
      return <LinearProgress/>
    }

    return (
      <Paper className="p-15">
        <h3>{'id участников группы #' + this.props.group_id}</h3>
        { user_ids.map(user_id => (
          <div className="user_id" key={ user_id }>
            { user_id }
          </div>
        ))}
      </Paper>
    )
  }
}

export default GroupMembersList