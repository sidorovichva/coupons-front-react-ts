// import { useEffect, useState } from 'react';
// import axios from "axios";
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../redux/StoreConfig";
// import {closeWindow} from "../redux/PopUpWindowsSlicer";
// import {reset} from "../redux/AxiosSlicer";

const AxiosRequest = (
    // method: string,
    // url: string,
    // body: string,
    // headers: string
) => {

    // const [data, setData] = useState<[]>([]);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    //
    // const index = 'http://localhost:8080';
    //
    // //const { link, body, method, isActive } = useSelector((state) => ConfigureStore.getState().AxiosSlicer);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     console.log("AxiosRequest - useEffect")
    //     const abort = new AbortController();
    //
    //     // const token = localStorage.getItem("Authorization")
    //     // const config = token === '' ?
    //     //     {headers: {"Content-Type": "application/json"}} :
    //     //     {headers: {
    //     //             "Authorization": token,
    //     //             "Content-Type": "application/json"
    //     //         }
    //     //     }
    //
    //     // const config = {
    //     //     headers: {
    //     //         "Authorization": token,
    //     //         "Content-Type": "application/json"
    //     //     }
    //     // }
    //
    //     // console.log("AxiosRequest");
    //     // console.log("url: " + index + link);
    //     // console.log("body: " + body);
    //     // console.log("headers: " + config)
    //
    //     axios({
    //         method: method,
    //         url: url,
    //         data: body,
    //         headers: headers,
    //     })
    //     .then(response => {
    //         if (response.status !== 200) {
    //             throw Error("the data couldn't be fetched")
    //         }
    //         console.log(response)
    //         dispatch(reset())
    //         dispatch(closeWindow());
    //         return response;
    //     })
    //     .then((response) => {
    //         setData(response.data);
    //         setIsPending(false);
    //         setError(null);
    //     })
    //     .catch((err) => {
    //         if (err.name === 'AbortError') {
    //             console.log('fetch aborted');
    //         } else {
    //             setError(err.message);
    //             setIsPending(false);
    //         }
    //     })
    //
    //     return () => abort.abort();
    //
    // }, [isActive]);
    //
    // return { data, isPending, error }
}

export default AxiosRequest;