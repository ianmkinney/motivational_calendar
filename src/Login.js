import React, { useState } from 'react';
import LoginForm from 'LoginForm';

function Login() {
    
    const [user, setUser] = useState({name: "", username: ""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

    }

    const Logout = () => {
        setUser({ name: "", username: ""});
    }

    return (
        <div className="App">
            {(user.username !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                    </div>

            ) : (
                <LoginForm Login= {Login} error={error} />
            )}
        </div>
    );
}

export default Login;