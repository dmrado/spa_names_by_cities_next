import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import Cities from "../components/vk/Cities"
import Countries from "../components/vk/Countries"
import React from "react"


export default () => {
    return(
        <>
            <MenuVK />
            <Cities country_id = {'1'}/>
            <Countries count = {'11'}/>
        </>
    );
}