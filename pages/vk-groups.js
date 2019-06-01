import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import React from "react"
import GroupMembersList from "../components/vk/GroupMembersList";


export default () => {
    return(
        <>
            <MenuVK />
            <GroupMembersList group_id={ '30022666' }/>
        </>
    );
}