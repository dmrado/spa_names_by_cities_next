import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.nameMethod}>
                <input type="text" name="last_name" placeholder="Введите фамилию"/>
                <button>Получить погоду</button>
            </form>
        );//end return
    }//end render
}
export default Form;