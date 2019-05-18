import "../sass/styles.scss"
import Menu from "../components/Menu"
import YanMap from "../components/YanMap";


export default () => {
    return(
        <>
            <Menu />
            {'Вы наконец сможете обнаружить себя'}
            <YanMap />
        </>
    );
}