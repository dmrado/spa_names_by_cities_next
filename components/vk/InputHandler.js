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
    _handleKeyDown = e => {
        if(e.key === 'Enter'){
            gettingSurename = async (evt) => {
                evt.preventDefault();
                let surname = Inputs.aria_label.value;
                alert(surname);
                if(surname){
                    const api_url = await fetch(
                        'http://localhost:3000/vk-api&users.get?X={surname}'
                    const data = await api_url.json();
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
    }


}

export default InputHandler;
