import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import React from "react"
import UsersList from "../components/vk/UsersList"


export default () => {
    return(
        <>
            <MenuVK />
            <br />
            <UsersList user_ids={ '1,2,5,731968' }/>
        </>
    );
}