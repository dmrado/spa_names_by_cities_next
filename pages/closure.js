import React from "react"
import ReactDom from "react-dom"

class Closure extends React.Component{
    const printAll = () => {
        const name = "Ivan"
        const surname = "Ivanov"
            const printName = () => {
            console.log(name + surname)
        }
        return printName
    }
    const printFinal = printAll()


    render(){
        const h1 = ReactDOM.createElement('h1', null, 'Привет МИР!')
        return(

            <div className="someClass">
                {h1}
                {/*{printFinal}*/}
            </div>
        )
    }
}

export default Closure