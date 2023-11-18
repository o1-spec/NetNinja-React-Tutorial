import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();//It can be associated with a specific fetch request and once we have associated it with a fetch, we can use the abort controller to stop the fetch
        
        
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal })
        .then(res => {
            //console.log(res)
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then((data) => {
            //console.log(data);
            setError(null);
            setData(data);
            setisPending(false);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
            //console.log(err.message)//CONNECTION ERROR
            setError(err.message)
            setisPending(false);
            }
        })
        },1000)

        return () => abortCont.abort()
        //console.log('Use effect run')
        //console.log(name)
    },[url])

    return {data,isPending,error}
}

export default useFetch 