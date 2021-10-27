import React, { useState } from 'react';
import Routes from './Routes'
import LoginForm from './components/LoginForm';




function App() {
    const adminUser = {
        username: "Maeve345",
        password: "Freedom934%"
    }

    const [user, setUser] = useState({name: "", username: ""});
    const [error, setError] = useState("");




// function App() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
// }
    
    const Login = details => {
        console.log(details);
        
        if(details.username === adminUser.username && details.password === adminUser.password) {
            console.log("Logged in");
            setUser({
                name: details.name,
                username: details.username
            });
        } else {
            console.log("Login not recognized!");
            setError("Login not recognized!");
        }
    }

    const Logout = () => {
        setUser({ name: "", username: ""});
    }

    return (
        <div className="App">
            {(user.username !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button> //create login button
                    </div>

            ) : (
                <LoginForm Login= {Login} error={error} />
            )}
        </div>
    );

export default App }
