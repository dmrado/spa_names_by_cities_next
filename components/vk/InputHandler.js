import React from "react"
import { SERVICE_KEY } from './config'
import Inputs from "InputVK"
import getUsers from "api"

class InputHandler extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        id: undefined,
        first_name: undefined,
        last_name: undefined,
        is_closed: undefined,
        city: undefined
    }

    const arg = Inputs.inputProps.value;

    gettingSurename = arg => {
        let surname = arg.value();

        if(arg){
            const agr_url = await fetch(
            const API_URL = 'http://localhost:3000/vk-api&users.get'
            const data = await arg_url.json();
            )
        }
        this.setState({
            id: fields.id,
            first_name: fields.first_name,
            last_name: fields.last_name,
            first_name: fields.first_name
        })
    }

}

export default InputHandler;
