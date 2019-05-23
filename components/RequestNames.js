//import Head from next/head
import React from "react"

class RequestNames extends React.component{
    state = {
        last_name: undefined,
        city: []
    }
    getNames = async (e) => {
        e.preventDefault();
        let last_name = e.target.element.name.value;
        //alert(names)
        if(last_name){
            const api_url = await fetch(
                "https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&access_token=533bacf01e11f55b536a565b57531ac114461ae8736d6506a3&v=5.95"
                const data = await api_url.json();
                this.setState({//правим в соответствие с jsonОМ из VK
                    last_name: undefined,
                    city: undefined
                })
            )//end fetch
        }//end if
        else{ this.setState({
            last_name: undefined,
            city: undefined
            });
        }
    }//end async
    //здесь НЕ надо рендерить, а надо как-то отправить в СУБД...?
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