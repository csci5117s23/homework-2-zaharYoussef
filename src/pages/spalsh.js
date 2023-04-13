import style from '@/styles/splash.module.css';
import { SignIn } from "@clerk/clerk-react";
import { useState } from "react"
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';





export default function Splash() {

    const [showSignin, setShowSignin] = useState(false);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const router = useRouter();


    if (isLoaded && userId) {
        router.push('/todos');
    }

    const goLogin = () => {
        setShowSignin(true);
    }

    const hideLogin =() =>{
        setShowSignin(false);
    }


    return (
        <header className={style.appHeader}>
            <h1>Welcome to your to-do list!</h1>
            <p> add picture here 😁</p>
            {showSignin && <SignIn />}
            {showSignin ? 
                (<button className={style.cancel} onClick={hideLogin}>Cancel</button>)
                : (<button className={style.login} onClick={goLogin}>Login</button>)    
            }
        </header>
    );
}