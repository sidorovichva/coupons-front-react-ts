import './LoginButton.css';
import {SyntheticEvent, useState} from 'react';
import LoginWindow from "../LoginWindow";

function LoginButton():JSX.Element {
    const [name, setName] = useState('Login');

    const handleClick = (args: SyntheticEvent) => {
        setName(name === 'Login' ? 'Logout' : 'Login');
        if (name === 'Login') args.currentTarget.setAttribute('style', 'background-color: black');
        else args.currentTarget.setAttribute('style', 'background-color: green');
        return (
            <div></div>
            // <Switch>
            //     <Route exact path="/login">

            //     </Route>
            // </Switch>
        );
    }

    return (
        <div className="LoginButton">
             <button className="headerButton" onClick={handleClick}>{name}</button>
             {name === 'Logout' ? <LoginWindow/> : <p></p>}
        </div>
    )
}

export default LoginButton;