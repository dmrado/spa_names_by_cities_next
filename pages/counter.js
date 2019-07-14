import React from "react"

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
    plusNumber = () => this.updateNumber( parseInt(this.state.a) + parseInt(this.state.b))
    minusNumber = () => this.updateNumber( this.state.a - this.state.b )
    multiplyNumbers = () => this.updateNumber( this.state.a * this.state.b )
    divideNumbers = () => this.updateNumber( this.state.a / this.state.b )




    render(){
        return(
            <>

            <input type ="number" placeholder="введите первое число" onChange={ this.changeA }/>
            <input type ="number" placeholder="введите второе число" onChange={ this.changeB }/>
            <br/>
            <button className="button" onClick={ this.plusNumber }>+</button>
            <button className="button" onClick={ this.minusNumber }>-</button>
            <button className="button" onClick={ this.multiplyNumbers }>*</button>
            <button className="button" onClick={ this.divideNumbers }>/</button>
            <div>
                {this.state.num}
            </div>

            </>
        )
    }
}

export default Count;