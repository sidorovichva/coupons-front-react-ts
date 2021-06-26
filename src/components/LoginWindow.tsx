import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './LoginWindow.css';
import {useDispatch} from "react-redux";
import {authorize, pushTheButton} from "../redux/LoginSlice";

const LoginWindow = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        const config = {
            headers: {
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
            if (res.data.Authorization !== null && res.data.Authorization.startsWith("Bearer ")) {

                localStorage.setItem("Authorization", JSON.stringify(res.data.Authorization)
                    .slice(1, -1)
                    .replace(/\sUsername:[\w\d\W\D]+/, ''))

                localStorage.setItem("Username", JSON.stringify(res.data.Authorization)
                    .slice(1, -1)
                    .replace(/Bearer\s[\S]+\sUsername:/, '')
                    .replace(/\sRole:\[ROLE_[\w]+]$/, ''))

                localStorage.setItem("Role", JSON.stringify(res.data.Authorization)
                    .slice(1, -1)
                    .replace(/Bearer\s[\w\d\W\D]+\sRole:\[ROLE_/, '')
                    .replace(/]$/, ''))

                dispatch(authorize({
                    emailValue: localStorage.getItem("Username"),
                    roleValue: localStorage.getItem("Role")
                }))
                dispatch(pushTheButton());
            } else {
                console.log("authorization failed")
            }
        })
        .catch(err => {
            console.log(err);
            setUsername('');
            setPassword('');
        });
    }

    //const email = localStorage.getItem("Authorization")

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
