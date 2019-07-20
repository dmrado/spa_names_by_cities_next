import React from 'react'
import fetch from 'isomorphic-fetch'

const getId = (urlFilm)=>{
    return urlFilm.split('/').pop()
}//метод split разбивает строку на массив по признаку слеш, pop бере последний элемент массива

class People extends React.Component{
    state = {
        people: undefined
    }

    static getInitialProps ({ query: { id } }) {
        return { id: id }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/people/' + this.props.id)
            .then((response)=>{
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }
                return response.json()
            }).then((answer) =>{
            this.setState({people:answer})

            console.log(answer)
            console.log(answer.films)
        })

        //200 - все нормально
        //300 - редирект
        //400 - ответа нет
        //500 - ошибка сервера
    }

    render(){
        console.log(this.props)
        if(!this.state.people){//он пустой
            return(<div>{'Сделайте запрос'}</div>)
        }
        return(
            <div>
                {this.state.people.name}
                <ul>
                    {/*файл server.js строки 14-16*/}
                    {this.state.people.films.map((item) => {
                        return <li><a href={'/film/'+ getId(item)}>{item}</a></li>
                    })}
                </ul>
            </div>
        )}
}

export default People