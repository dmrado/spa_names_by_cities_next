import React from 'react'
import { getCities } from './api'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'

class InputCity extends React.Component {
    state = {
        cities: null
    }

    componentDidMount() {
        getCities({
            success: response => this.setState({
                cities: response.items
            }),
            error: () => {},
            country_id: 1
        })
    }

    render() {
        const { cities } = this.state

        if(!cities) {
            return <LinearProgress/>
        }

        return (
            <Paper className="p-15">
                {/*<h3>{ 'Города страны пользователей: ' + this.props.country_id }</h3>*/}
                <select onChange={
                    this.props.handleKeyDrop
                }>
                { cities.map(city => (
                    <option key={ city.id } value={ city.id }>
                        { city.title }
                    </option>
                ))}
                </select>
            </Paper>
        )
    }
}

export default InputCity