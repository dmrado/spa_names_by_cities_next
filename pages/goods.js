import React from "react"
import List from "../components/ui/List"
import {getItems} from "../components/model/Goods"

// export default class GoodsPage extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     state = {
//         type: "all"
//     }
//     changeType (type)  {
//         this.setState({type: type})
//     }
//     render(){
//         return (
//             <>
//                 <div className="control">
//                     {/*это форма не вызова функции, а только ее объявлления в формате ES6*/}
//                     <button onClick={(e) => this.changeType('fruits')}>Выбрать фрукты</button>
//                     <button onClick={(e) => this.changeType('veg')}>Выбрать овощи</button>
//                     <button onClick={(e) => this.changeType('all')}>Хочу всё!</button>
//                 </div>
//                 <List className="list" items={getItems(this.state.type)}/>
//             </>
//         )
//     }
// }

export default class GoodsPage extends React.Component{
    state = {
        type: 'all'
    }

    changeType = (type) =>{
        this.setState({type})
    }
    //this.setState всегда вызывает render и все методы жизненного цикла изменений
    render(){
        const items = getItems(this.state.type);
        return(
            <>
                <button className="but" onClick={(e) => this.changeType('fruits')}>Хочу фрукты</button>
                <button className="but" onClick={(e) => this.changeType('veg')}>а овощи?!</button>
                <button className="but" onClick={(e) => this.changeType('all')}>Все хочу</button>

                <List className="list" items={items}/>
            </>
        )
    }
}