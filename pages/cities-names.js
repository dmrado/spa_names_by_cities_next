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
        city: '1'
    }

    handleKeyDown = (e) => {
       // console.log(e.target.value);

        if (e.key === 'Enter') {
            this.setState({
                q: e.target.value
            })
        }
    }

    handleKeyDrop = (e) => {
        this.setState({
            city: e.target.value
        })
    }


    render() {
        const {q,city} = this.state
        let locatorPlaceholder = <p>Выберите город и фамилию</p>
        let mapPlaceholder = ''
        if(q && city){
            locatorPlaceholder = <Locator q={q} city={city} />
            mapPlaceholder = <YanMap city={city}/>
        }

        return (
            <>
                <Head>
                <script
                    key="ya-map-api"
                    src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
                />
                </Head>
                <MenuVK/>
                <InputCity handleKeyDrop={this.handleKeyDrop}/>
                <InputVK handleKeyDown={this.handleKeyDown}/>
                {locatorPlaceholder}
                {mapPlaceholder}
            </>
        )
    }
}
export default CitiesNames;