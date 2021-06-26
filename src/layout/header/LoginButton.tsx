import './LoginButton.css';
import {SyntheticEvent, useState} from 'react';
import LoginWindow from "../../components/LoginWindow";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {pushTheButton} from "../../redux/LoginSlice";

function LoginButton():JSX.Element {

    const [name, setName] = useState('Login');

    const { isPushed } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const dispatch = useDispatch();

    const handleClick = (args: SyntheticEvent) => {
        dispatch(pushTheButton())
        setName(name === 'Login' ? 'Logout' : 'Login');
        if (name === 'Login') args.currentTarget.setAttribute('style', 'background-color: inherit');
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
            {/*{name === 'Logout' ? <LoginWindow/> : <p></p>}*/}
            {/*{isPushed === true ? <LoginWindow/> : <p></p>}*/}
            {isPushed && <LoginWindow/>}
        </div>
    )

    // return (
    //     <div className="LoginButton">
    //          <button className="headerButton" onClick={handleClick}>{name}</button>
    //          {/*{name === 'Logout' ? <LoginWindow/> : <p></p>}*/}
    //          {isPushed === true ? <LoginWindow/> : <p></p>}
    //     </div>
    // )
}

export default LoginButton;