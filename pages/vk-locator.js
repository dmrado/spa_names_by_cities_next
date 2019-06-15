import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import React from "react"
import Locator from "../components/vk/Locator"
import InputVK from "../components/vk/InputVK"

class UserPageVK extends React.Component {

    state ={
        q: 'Радович',
    }

    handleKeyDown = (e) => {
       // console.log(e.target.value);

        if (e.key === 'Enter') {
            this.setState({
                q: e.target.value
            })
        }
    }

    render() {
        const q = this.state.q
        return (
            <>
                <MenuVK/>
                <InputVK handleKeyDown={this.handleKeyDown}/>
                <Locator q={q} city={'1'} />
            </>
        )
    }
}
export default UserPageVK;

