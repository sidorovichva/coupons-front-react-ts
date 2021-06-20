import { useEffect, useState } from 'react';
import axios from "axios";
//export const jwtToken = localStorage.getItem("authorization");

const useFetch = (url: string) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //const token = localStorage.getItem("access_token")

    useEffect(() => {

        const abort = new AbortController();

        axios.get(url,
            //{headers: {Authorization: "Bearer " + jwtToken}}
            //{headers: {Authorization: "Bearer " + localStorage.getItem("authorization")}}
        )
            .then(response => {
                if (response.status !== 200) {
                    throw Error("the data couldn't be fetched")
                }
                return response;
            })
            .then((response) => {
                setData(response.data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })

        return () => abort.abort(); 

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;