import "../sass/styles.scss"
import Menu from "../components/Menu"
import YanMap from "../components/YanMap";
import Form from "../components/Form";


export default () => {
    return(
        <>
            <Menu />
            {'Вы наконец сможете обнаружить себя и своих однофамильцев'}
            <Form placeholder="Введите фамилию"/>
            <YanMap />
        </>
    );
}