import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponce<T>{
    count:number;
    results:T[];
}

const useData = <T>(endPoint:string)=>{
 const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading,setLoading]= useState(false);
    
    useEffect(() => {
        const controller =   new AbortController();
        setLoading(true);
      apiClient
        .get<FetchResponce<T>>(endPoint,{signal:controller.signal})
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
    },[]);

        return{error,data, loading};   
}   

export default useData;