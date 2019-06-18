import React from 'react'
import { getCountries } from './api'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'


class Countries extends React.Component {
    state = {
        countries: null
    }

    componentDidMount() {
        getCountries({
            success: response => this.setState({
                getCountries: response.items
            }),
            error: () => {},
            countries : this.props.country_id
        })//что с error в пропсе не то сидит
    }

    render() {
        const { countries } = this.state

        if(!countries) {
            return <LinearProgress/>
        }

        return (
            <Paper className="p-15">
                <h3>{ 'Страны пользователей: ' + this.props.items.title }</h3>
                { countries.map(country => (
                    <div className="country" key={ country.id }>
                        { country.title }
                    </div>
                ))}
            </Paper>
        )
    }
}

export default Countries