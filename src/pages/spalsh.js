import { useRouter } from 'next/router';
import style from '@/styles/splash.module.css';


export default function Splash() {
    const router = useRouter();

    function goLogin() {
        router.push('./todos');
    }


    return (
        <header class={style.appHeader}>
            <h1>Welcome to your to-do list!</h1>
            <p> add picture here 😁</p>
            {/* <img src={logo} className="App-logo" alt="logo"/> */}
            <button class={style.login} onClick={goLogin}>Login</button>
        </header>
    );
}