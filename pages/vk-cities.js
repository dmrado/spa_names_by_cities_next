import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import Cities from "../components/vk/Cities"
import React from "react"


export default () => {
    return(
        <>
            <MenuVK />
            <br />
            <Cities country_id = {'1'}/>
        </>
    );
}