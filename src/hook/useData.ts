import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponce<T>{
    count:number;
    results:T[];
}

const useData = <T>(endPoint:string, requestConfig?:AxiosRequestConfig,deps?:any[])=>{
 const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading,setLoading]= useState(false);
    
    useEffect(() => {
        const controller =   new AbortController();
        setLoading(true);
      apiClient
        .get<FetchResponce<T>>(endPoint,{signal:controller.signal,...requestConfig})
        .then((res) => {
            setData(res.data.results)
            setLoading(false)
                })
        .catch((err) => {
            if(err instanceof CanceledError ) return;
            setError(err.message)
            setLoading(true);
                });
        return () => controller.abort();
    }, deps?[...deps]:[]);

        return{error,data, loading};   
}   

export default useData;