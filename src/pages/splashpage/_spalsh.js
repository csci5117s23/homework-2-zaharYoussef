import style from '../../styles/splash.module.css';


export default function Splash() {
    return (
        <header class={style.appHeader}>
            <h1>Welcome to your to-do list!</h1>
            <p> add picture here 😁</p>
            {/* <img src={logo} className="App-logo" alt="logo"/> */}
            <button class={style.login}>Login</button>
        </header>
    );
}