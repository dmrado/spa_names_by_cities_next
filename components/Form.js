import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.namesMethod}>
                <input type="text" name="last_name" placeholder="Введите фамилию"/>
                <button>Получить данные</button>
            </form>
        );//end return
    }//end render
}
export default Form;