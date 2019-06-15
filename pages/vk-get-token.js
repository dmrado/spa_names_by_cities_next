import React from "react"
import { getTokenUrl } from '../components/vk/api.js'

class GetTokenPage extends React.Component {

    componentDidMount() {
        if(window) {
            window.location.href = getTokenUrl();
        }
    }

    render() {
        return 'Loading...'
    }
}
export default GetTokenPage;
