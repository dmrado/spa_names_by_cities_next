import React from 'react'
import { getLocation } from './api'

class Locator extends React.Component {
    state = {
        count: undefined
    }

    nextLocation = () =>{
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

    componentDidMount() {
      this.nextLocation()
    }

    componentDidUpdate(prevProps){
      if(this.props.q !== prevProps.q || this.props.city !== prevProps.city){
        this.nextLocation()
      }
    }

    render() {
        const { count } = this.state
        console.log(count)

        if(typeof count === 'undefined') {
            return 'Loading...'
        }

        return (
            <>
                <h3>{ `Пользователей ${this.props.q} в городе ${this.props.cityName}: ${count} `}</h3>
            </>
        )
    }
}

export default Locator