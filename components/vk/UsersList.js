import React from 'react'
import { getUsers } from './api'
import Paper from '@material-ui/core/Paper'
// import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


class UsersList extends React.Component {
  state = {
    users: null
  }

  nextUsers = () =>{
    getUsers({
      success: response => this.setState({
        users: response
      }),
      error: () => {},
      user_ids: this.props.user_ids
    })
  }

//впервые загрузилось приложение
  componentDidMount() {
    this.nextUsers()
  }

//при имзменении props меняется state, если новое значение не равно предыдущему iser_ids
  componentDidUpdate(prevProps){
    if(this.props.user_ids !== prevProps.user_ids){
    this.nextUsers()
    }
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
            <div className="user" key={ user.id }><a target="_blank" href={`https://vk.com/id${user.id}`}>
            <Card style={{width: '200px' }}>
              <CardActionArea>
                <CardMedia style={{minHeight: '200px' }}
                    image={user.photo_200}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    { user.first_name + ' ' + user.last_name }
                      </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </a>
          </div>
        ))}
      </Paper>
    )
  }
}

export default UsersList