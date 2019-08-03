import React from "react"

// const Closure = () => {
//     const printAll = () => {
//         const name = "Ivan"
//         const surname = "Ivanov"
//         const printName = () => {
//             //console.log(name + ' ' + surname)
//             return name + ' ' + surname
//         }
//         return printName
//         //именно без скобок, потому что мы не хотим получить Ивана Иванова, а хотим получить элемент управления, дергая который му бдем получать Ивана Иванова, этот элемент управления - это самостоятельная сущность, кторую потом примет новая функция printFinal
//     }
//     const printFinal = printAll()
//
//     const h1 = ReactDOM.createElement('h1', null, 'Привет Мир!')
//     return(
//         <div className="someClass">
//             {h1}
//             от пользователя с именем: {printFinal()}
//         </div>
//     )
// }

const Closure = () => {
    const something = () => {
        let arg = 0
        const printArg = () => {
            return arg += 1
        }
        return printArg
    }
    const getArg = something()

    return (
        <div className="someClass">
            {getArg()} {getArg()} {getArg()} {getArg()} {getArg()}
            <h1><p>Вышел зайчег погуль-лять</p></h1>
        </div>
    )
}

export default Closure
