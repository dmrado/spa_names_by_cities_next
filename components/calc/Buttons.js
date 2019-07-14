import React from "react";


const Plus = props => {
    //передать внутрь "a" и "b" и функцию возвращающую функцию, обновляющую родителя иными словами - результат сложения а и b

    return <button className="button" onClick={ () => props.updateNumber(parseInt(props.a) + parseInt(props.b)) }>+</button>
}

const Minus = props => {
    return <button className="button" onClick={ () => props.updateNumber(props.a - props.b) }>-</button>
}
const Multi = props => {
    return <button className="button" onClick={ () => props.updateNumber(props.a * props.b) }>*</button>
}
const Divide = props => {
    return <button className="button" onClick={ () => props.updateNumber(props.a / props.b)}>/</button>
}
const Fact = props => {
    return <button className="button" onClick={ () => props.updateNumber(props.fact(this.state.a))}>Факториал первого числа</button>
}
export {Plus, Minus, Multi, Divide, Fact}