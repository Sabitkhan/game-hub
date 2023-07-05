import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id:number;
    name:string;
}
interface FetchGenresResponce{
    count:number;
    results:Genre[];
}

const UseGenre = ()=>{
 const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loading,setLoading]= useState(false);
    
    useEffect(() => {
        const controller =   new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenresResponce>("/genres",{signal:controller.signal})
        .then((res) => {
            setGenres(res.data.results)
            setLoading(false)
                })
        .catch((err) => {
            if(err instanceof CanceledError ) return;
            setError(err.message)
            setLoading(true);
                });
        return () => controller.abort();
    },[]);

        return{error,genres , loading};   
}   

export default UseGenre;