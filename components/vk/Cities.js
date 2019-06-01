import React from 'react'
import { getCities } from './api'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'


class Cities extends React.Component {
    state = {
        cities: null
    }

    componentDidMount() {
        getCities({
            success: response => this.setState({
                cities: response.items
            }),
            error: () => {},
            country_id: this.props.country_id
        })
    }

    render() {
        const { cities } = this.state

        if(!cities) {
            return <LinearProgress/>
        }

        return (
            <Paper className="p-15">
                <h3>{ 'Города страны пользователей: ' + this.props.country_id }</h3>
                { cities.map(city => (
                    <div className="city" key={ city.id }>
                        { city.title }
                    </div>
                ))}
            </Paper>
        )
    }
}

export default Cities