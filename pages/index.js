import "../sass/styles.scss"
import Menu from "../components/Menu"


export default () => {
    return(
        <>
            <Html>
                <Head>
                    <style>
                        {/*'@material-ui/core/Input' есть, но где разместить код ниже на случай недоступности сервера @material-ui*/}
                        <!-- Fonts to support Material Design -->
                        // <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
                        //     <!-- Icons to support Material Design -->
                        // <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    </style>
                </Head>
            </Html>
        <Menu />
        {'Это наше меню на сегодня'}
        </>
    );
}