import React from 'react'
import { getGroupMembers } from './api'

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
      return 'Loading...'
    }

    return (
      <>
        <h3>{'id участников группы #' + this.props.group_id}</h3>
        { user_ids.map(user_id => (
          <div className="user_id" key={ user_id }>
            { user_id }
          </div>
        ))}
      </>
    )
  }
}

export default GroupMembersList