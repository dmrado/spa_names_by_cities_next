import Head from 'next/head'
//связать этот компонент с RequestNames
//import RequestNames from "./RequestNames"
import Form from "./Form"
import React from "react";
import {getCities} from "./vk/api";

//ymaps создается в объекте window как глобальная переменная после подключения api-yandex map

class YanMap extends React.Component {
    myMap = null

    componentDidMount() {
        //здесь id городов в city
        let city = this.props.city
        let myMap = this.myMap

        if ((typeof window !== 'undefined') && window.ymaps) {
            var ymaps = window.ymaps;
            ymaps.ready(init);//если функции ready нет, то обязательно использовать ComponentDidMount
        }

        function init() {

            ymaps.geocode('Moscow')
                .then(function (res) {
                    myMap = new ymaps.Map('map', {
                        center: res.geoObjects.get(0)
                            .geometry.getCoordinates(),
                        zoom: 10
                    });
                    this.myMap = myMap
                    // myMap = new ymaps.Map("map", {
                    //     center: [55.76, 37.64],
                    //     zoom: 13
                    // });

                    // карта не должна менять масштаб скроллом мыши.
                    myMap.behaviors.disable('scrollZoom');
                    // из элементов карты присутствует только ползунок изменения масштаба;
                    myMap.controls.add("zoomControl", {
                        position: {top: 15, left: 15}
                    });

                    var myPlacemark = new ymaps.Placemark([55.7649, 37.63836], {},
                        {
                            iconLayout: 'default#image',
                            // iconImageHref: 'мой URL',
                            iconImageSize: [40, 51],
                            iconImageOffset: [-20, -47]
                        });

                    myMap.geoObjects.add(myPlacemark);
                });
        }
    }

    componentDidUpdate() {
        ymaps.geocode('Samara')
            .then((res) => {
                this.myMap.setCenter(res.geoObjects.get(0)
                    .geometry.getCoordinates());
            });
    }

    render() {
        return (
            <>
                <div id="map" style={{width: '600px', height: '400px', borderStyle: 'solid', borderColor: 'gray'}}
                />
            </>
        );
    }
}

export default YanMap;