import React from 'react' 
import "../sass/styles.scss"
import UsersList from '../components/vk/UsersList'
import GroupMembersList from '../components/vk/GroupMembersList'
import Cities from '../components/vk/Cities'
// import Locator from '../components/vk/Locator'
import Menu from "../components/vk/MenuVK"

export default () => {
    return (
        <>
            {'Здесь будут ВК API запросы'}
            <br />
            <UsersList user_ids={ '1,2,5,731968' }/>
            <br />
            <GroupMembersList group_id={ '30022666' }/>
            <br />
            <Cities country_id = {'1'}/>
            <br />
            {/*<Locator q={'Радович'} city={'1'}/>*/}
        </>
    );
}