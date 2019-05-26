import React from 'react'
import { getLocation } from './api'

class Locator extends React.Component {
    state = {
        count: undefined
    }

    componentDidMount() {
        getLocation({
            success: response => this.setState({
                count: response.count
            }),
            error: () => {},
            //далее идут параметры из запроса в саму функцию
            q: this.props.q,
            city: this.props.city
        })
    }

    render() {
        const { count } = this.state

        if(typeof count === 'undefined') {
            return 'Loading...'
        }

        return (
            <>
                <h3>{ `Пользователей ${this.props.q} в городе ${this.props.city}: ${count} `}</h3>
            </>
        )
    }
}

export default Locator