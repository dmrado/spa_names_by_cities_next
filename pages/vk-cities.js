import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import Cities from "../components/vk/Cities"
import Countries from "../components/vk/Countries"
import React from "react"
import Grid from '@material-ui/core/Grid';

export default () => {
    return(
        <>
            <MenuVK />
            <Grid container spacing={3}>
                <Grid item md={6}>
            <Countries count = {'100'}/>
                </Grid>
                <Grid item md={6}>
            <Cities country_id = {'1'}/>
                </Grid>
            </Grid>
        </>
    );
}