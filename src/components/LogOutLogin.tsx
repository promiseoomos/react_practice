import { useState } from "react";

const LogOutLogin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }

    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            {
                !isLoggedIn ? (<button onClick={handleLogIn} >Login</button>) : (<button onClick={handleLogOut}>Logout</button>)
            }
            
        </div>
    )
}

export default LogOutLogin;