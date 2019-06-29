import "../sass/styles.scss"
import MenuVK from "../components/vk/MenuVK"
import React from "react"
import InputCity from "../components/vk/InputCity"
import Locator from "../components/vk/Locator"
import InputVK from "../components/vk/InputVK"
import YanMap from "../components/YanMap"
import Head from "next/head"

class CitiesNames extends React.Component {

    state ={
        q: null,
        city: '1',
        cityName: 'Moscow'
    }

    handleKeyDown = (e) => {
       // console.log(e.target.value);
//
        if (e.key === 'Enter') {
            this.setState({
                q: e.target.value
            })
        }
    }
// выпадает город из списка "если что-то меняется измени город"
    handleKeyDrop = (e) => {
        this.setState({
            city: e.target.value,
            cityName: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
        })
    }


    render() {
        const {q,city, cityName} = this.state
        let locatorPlaceholder = <p>Выберите город и фамилию</p>
        let mapPlaceholder = ''
        if(q && city){
            locatorPlaceholder = <Locator q={q} city={city} cityName={cityName} />
            mapPlaceholder = <YanMap cityName={cityName}/>
        }

        return (
            <>
                <Head>
                {/*Добавляет в head строку для работы с api yandex в index.html*/}
                <script
                    key="ya-map-api"
                    src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
                />
                </Head>
                <MenuVK/>
                {/*добавляет компоненту с меню*/}
                <InputCity handleKeyDrop={this.handleKeyDrop}/>
                {/*добавляет поле селекта городов и если оно меняется - меняет стейт*/}
                <InputVK handleKeyDown={this.handleKeyDown}/>
                {/*меняется фамилия - меняется стейт*/}
                {locatorPlaceholder}
                {/*отображает фамилию и город*/}
                {mapPlaceholder}
                {/*отображает карту города из ya api*/}
            </>
        )
    }
}
export default CitiesNames;