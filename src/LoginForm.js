import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", username: "", password: ""});
    const submitHandler = async (e) => {

        e.preventDefault();

        console.log(details)

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': 'applications/json'},
                body: JSON.stringify(details)
            }).then((res) => {
                console.log(res)
            })
            console.log(response)
        } catch(err) {
            console.error(err)
            alert('Invalid login')
        }


    }
    return (
        <form onSubmit={submitHandler}>
            <div ClassName="form-inner">
                <h2>Login</h2>
                {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                   <div className="form-group">
                       <label htmlFor="username">Username: </label>
                       <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                       </div>
                       <div className="form-group">
                           <label htmlFor="password">Password: </label>
                           <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                        </div>
                        <p class="form__text">
                            <a href="#" class="form__link">Forgot your Password?</a>
                        </p>
                        <p class="form__text">
                            <a class="form__link" id="linkCreateAccount" >Don't have an account? Create account</a>
                        </p>
                        <input type="submit" value="LOGIN"/>
                </div>
        </form>
    )
}
export default LoginForm