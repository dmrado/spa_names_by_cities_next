import React from 'react'
import { getCountries } from './api'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import TablePagination from '../ui/TablePagination'

class Countries extends React.Component {
    state = {
        countries: null
    }

    componentDidMount() {
        getCountries({
            success: response => this.setState({
                countries: response.items
            }),
            error: () => {},
            count: this.props.count
        })
    }

    render() {
        const { countries } = this.state

        if(!countries) {
            return <LinearProgress/>
        }

        return (
            <Paper className="p-15">
                <h3>{ 'Страны пользователей ' }</h3>
                <TablePagination rows={ countries }/>
            </Paper>

        )
    }
}

export default Countries