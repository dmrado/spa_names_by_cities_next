//import Head from next/head
import React from "react"
import {VK_API_KEY} from "/src/config"

class RequestNames extends React.component {
    state = {
        last_name: undefined,
        count: undefined,
        city: undefined
    }
    getNames = async (e) => {
        e.preventDefault();
        let last_name = e.target.element.name.value;
        //alert(names)
        if (last_name) {
            const api_url = await fetch(
                `https://api.vk.com/method/users.search?city=1&q=Radovich&access_token=${VK_API_KEY}&v=5.95`)
            const data = await api_url.json();//await - синхронный запрос но в fetch асинхронность есть внутри
            this.setState({//правим в соответствие с jsonОМ из VK
                last_name: undefined,
                count: undefined,
                city: undefined
            })
        }//end if
        else {
            this.setState({
                last_name: undefined,
                count: undefined,
                city: undefined
            });
        }
    }//end async
    //здесь НЕ надо рендерить, а надо как-то отправить в СУБД...может колнчатого типа? но пока рендерим
    render() {
        return (
            <>
                <div className="listNames">
                    {this.props.last_name &&
                    <div>
                        <Form namesMethod={this.getNames}/>
                        <p>Сумма людей с этой фамилией: {this.props.count} </p>
                    </div>
                    }
                    <p className="error">{this.props.error}</p>
                </div>
            </>
        )
    }
}//class

//пример ответа сервера
//         "response":[{
//             "id":210700286,
//             "first_name":"Lindsey",
//             "last_name":"Stirling",
//             "bdate":"21.9.1986"
//         }]

//страница VK не нужна (тем более что приложение одностраничное), поэтому это идет в компонент YanMap, а здесь нужно запросить фамилию из API VK и отправить ее в СУБД, где будет обновляться таблица и затем формироваться обект содержащий список городов и количество в каждом
//остается вопрос а где же Head?

export default RequestNames;