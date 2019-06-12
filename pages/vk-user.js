import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import React from "react"
import UsersList from "../components/vk/UsersList"
import InputVK from "../components/vk/InputVK"

class UserPageVK extends React.Component {

    state ={
        user_ids: '1,2,5,731968',
    }

    handleKeyDown = (e) => {
       // console.log(e.target.value);

        if (e.key === 'Enter') {
            this.setState({
                user_ids: e.target.value
            })
            // console.log('do validate');
        }
    }

    render() {
        const user_ids = this.state.user_ids
        return (
            <>
                <MenuVK/>
                <InputVK handleKeyDown={this.handleKeyDown}/>
                <UsersList user_ids={user_ids}/>
            </>
        )
    }
}
export default UserPageVK;

