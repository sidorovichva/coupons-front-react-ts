import { useEffect, useState } from 'react';
import AxiosConfig from "../axios/AxiosConfig";

const useFetch = (url: string) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abort = new AbortController();

        AxiosConfig.get(url)
            .then(response => {
                if (response.status !== 200) {
                    throw Error("the data couldn't be fetched")
                }
                console.log(response)
                //if (url === 'http://localhost:8080') dispatch(loadAllCoupons({allCouponsArray: response.data}))
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