import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './LoginWindow.css';

const LoginWindow = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault()
        //const myHeaders = new Headers();
        //myHeaders.append("Content-Type", "application/json");

        const config = {
            //?
            //credentials: 'include',

            headers: {
                //"Content-Type": "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
            },
        }

        const raw = JSON.stringify({
            "username": username,
            "password": password
        });

        axios.post(
            "https://coupons-back-mysql-jwt.herokuapp.com/login",
            //"http://localhost:8080/login",
            raw,
            config
        )
        .then(res => {
            console.log(res)
            localStorage.setItem("Authorization", JSON.stringify(res.data.Authorization).slice(1, -1));
            console.log(localStorage.getItem("Authorization"));
        })
        .catch(err => console.log(err));
    }

    return (
        <form className="LoginWindow" onSubmit={ handleSubmit }>
            <div>
                <header>Login Form</header>
            </div>
            <div>
                <input
                    className="user"
                    type="text"
                    placeholder="e-mail"
                    value={  username }
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    className="pass"
                    type="password"
                    placeholder="password"
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="submit">
                <input
                    className="submitButton"
                    type="submit"
                />
            </div>
            <div className="bottom">
                <input
                    className="register"
                    type="button"
                    //onClick={ handleClick }
                />
                <input
                    className="forget"
                    type="button"
                    //onClick={ handleClick }
                />
            </div>
        </form>
    )
}

export default LoginWindow;
