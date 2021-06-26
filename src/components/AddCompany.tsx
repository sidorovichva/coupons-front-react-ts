import React, {SyntheticEvent, useState} from 'react';
import './AddCompany.css';
import {useDispatch} from "react-redux";
import {closeWindow} from "../redux/PopUpWindowsSlicer";
import axios from "axios";

const AddCompany = (): JSX.Element => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const token = localStorage.getItem("Authorization")
    const config = {
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    }

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        const raw = JSON.stringify({
            "name": name,
            "email": email,
            "password": password
        });
        console.log(raw)

        //axios.post('http://localhost:8080/companies', raw, config)
        axios.post('https://coupons-back-mysql-jwt.herokuapp.com/companies', raw, config)
            .then(response => {
                console.log(response.status)
                dispatch(closeWindow())
            })
            .catch((err) => {
                console.log(err.name)
            })
    }

    const cancel = (args: SyntheticEvent) => {
        dispatch(closeWindow())
    }

    return (
        <form className="AddCompany" onSubmit={ handleSubmit }>
            <div className="title">
                <header>Add Company</header>
                <button className="closeButton" onClick={ cancel }>&times;</button>
            </div>
            <div>
                <input
                    className="name"
                    type="text"
                    placeholder="company title"
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    className="email"
                    type="text"
                    placeholder="email"
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
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
                <input
                    className="cancelButton"
                    type="submit"
                    value="Cancel"
                    onClick={ cancel }
                />
            </div>
        </form>
    );
}

export default AddCompany;