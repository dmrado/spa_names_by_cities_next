import Head from 'next/head'
//связать этот компонент с RequestNames
import RequestNames from "./RequestNames"
import Form from "./Form"

//ymaps создается в объекте window как глобальная переменная после подключения api-yandex map
function YanMap() {

    if ((typeof window !== 'undefined') && window.ymaps) {
        var ymaps = window.ymaps;
        ymaps.ready(init);//если функции ready нет, то обязательно использовать ComponentDidMount

        function init() {

            var myMap;

            myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 13
            });

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

        }
    }
    return (
        <>
            <Head>
                <script
                    key="ya-map-api"
                    src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
                />
            </Head>
            {/*не понятно что делать с формой но она нужна для получения target.element.name.value*/}
            <Form/>

            <div id="map" style={{width: '600px', height: '400px', borderStyle: 'solid', borderColor: 'gray'}}
            />
        </>
    );
}

export default YanMap;