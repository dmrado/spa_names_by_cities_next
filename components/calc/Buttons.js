import React from "react"

const Plus = props => {
    //передать внутрь "a" и "b" и функцию возвращающую функцию, обновляющую родителя иными словами - результат сложения а и b

    return <button variant="contained" color="primary" className="button" onClick={ () => props.updateNumber(parseInt(props.a) + parseInt(props.b)) }>+</button>
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

const fact = (arg) => {
  if (arg <= 1) {
    return 1
  }
  return arg * fact(arg - 1)
}
const Fact = props => {
    return <button className="button" onClick={ () => props.updateNumber(fact(props.a))}>Факториал А</button>
}

const square = (arg) => {
    return Math.sqrt(arg)
}
const Square = props => {
    return <button className="button" onClick={ () => props.updateNumber(square(props.a))}>Квадратный корень А</button>
}

const percent = (a, b) => {
    let c = a /100 * b
    return c
}

const Percent = props => {
    return <button className="button" onClick={ () => props.updateNumber(percent(props.a, props.b))}>% B от А</button>
}

const power = (a, b) => {
    let c = Math.pow(a, b)
    return c
}

const Power = props => {
    return <button className="button" onClick={() => props.updateNumber(power(props.a, props.b))}>А в степени В</button>
}
export {Plus, Minus, Multi, Divide, Fact, Square, Percent, Power}