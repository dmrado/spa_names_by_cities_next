import fetch from 'isomorphic-fetch'
const getId = (urlFilm)=>{
    return urlFilm.split('/').pop()
}//метод split разбивает строку на массив по признаку слеш, pop берем последний элемент массива

class Film extends React.Component{
    state = {
        film: undefined
    }

    static getInitialProps ({ query: { id } }) {
        return { id: id }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/films/' + this.props.id)
            .then((response)=>{
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }
                return response.json()// это промис
            }).then((answer) =>{
            this.setState({film:answer})

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
            return(<div>{'Сделайте запрос фильма'}</div>)
        }
        return(
            <div>
                {this.state.film.title}
                <ul>
                    {/*файл server.js строки 17-19*/}
                    {this.state.people.films.map((item) => {
                        return <li><a href={'/film/'+ getId(item)}>{item}</a></li>
                    })}
                </ul>
            </div>
        )}
}

export default Film

import React from 'react'
