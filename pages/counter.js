import React from "react"
import {Plus} from "../components/calc/Buttons"
import {Minus} from "../components/calc/Buttons"
import {Multi} from "../components/calc/Buttons"
import {Divide} from "../components/calc/Buttons"
import {Fact} from "../components/calc/Buttons"
import {Square} from "../components/calc/Buttons"
import {Percent} from "../components/calc/Buttons"
import {Power} from "../components/calc/Buttons"


class Count extends React.Component{
    state = {
        num: 0,
        a: 0,
        b: 0
    }

    // incrementNumber = () => {
    //     this.setState({num: this.state.num + 1})
    // }
    //
    // decrementNumber = () => {
    //     this.setState({num: this.state.num - 1})
    // }

    changeA = (e) => {
        this.setState({a: e.target.value})
    }
    changeB = (e) => {
        this.setState({b: e.target.value})
    }
//до рефакторинга
    // plusNumber = () => {
    //     this.setState({num: parseInt(this.state.a) + parseInt(this.state.b) })
    // }
    // minusNumber = () => {
    //     this.setState({num: this.state.a - this.state.b })
    // }
    //
    // multiplyNumbers = () => {
    //     this.setState({num: this.state.a * this.state.b })
    // }
    //
    // divideNumbers = () => {
    //     this.setState({num: this.state.a / this.state.b })
    // }

    //после рефакторинга
    updateNumber = (num) => this.setState({num})
    // plusNumber = () => this.updateNumber( parseInt(this.state.a) + parseInt(this.state.b))
    // minusNumber = () => this.updateNumber( this.state.a - this.state.b )
    // multiplyNumbers = () => this.updateNumber( this.state.a * this.state.b )
    // divideNumbers = () => this.updateNumber( this.state.a / this.state.b )

//как только стейт изменился запускается render() и весь каскад методов жизненного цикла изменений
    render(){
        return(
            <>

                <input type ="number" placeholder="введите число А" onChange={ this.changeA }/>
                    <br/>
                <input type ="number" placeholder="введите число В" onChange={ this.changeB }/>
                    <br/>
                <Plus a={this.state.a} b={this.state.b} updateNumber={this.updateNumber}/>
                {/*если поставить с колл-бек круглые скобки это будет не колл-бек а функция которая выполнится прямо здесь*/}
                <Minus a={this.state.a} b={this.state.b} updateNumber={this.updateNumber}/>
                <Multi a={this.state.a} b={this.state.b} updateNumber={this.updateNumber}/>
                <Divide a={this.state.a} b={this.state.b} updateNumber={this.updateNumber}/>
                <Square a={this.state.a} updateNumber={this.updateNumber}/>
                <Power a={this.state.a} b={this.state.b} updateNumber={this.updateNumber}/>
                    <br/>
                <Fact a={this.state.a} updateNumber={this.updateNumber}/>
                <Percent a={this.state.a} b={this.state.b} updateNumber={this.updateNumber}/>

                {/*<button className="button" onClick={ this.divideNumbers }>/</button>*/}
                <div className="alert">
                    {this.state.num}
                </div>

            </>
        )
    }
}

export default Count;