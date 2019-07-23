import ReactDOM from "react"

const Closure = () => {
    const printAll = () => {
        const name = "Ivan"
        const surname = "Ivanov"
        const printName = () => {
            console.log(name + surname)
            return name + surname
        }
        return printName
    }
    const printFinal = printAll()

    const h1 = ReactDOM.createElement('h1', null, 'Привет МИР!')
    return(
        <div className="someClass">
            {h1}
            {printFinal()}
        </div>
    )
}

export default Closure