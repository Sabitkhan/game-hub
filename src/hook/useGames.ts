import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

 
export interface Platform{
  id:number;
  name:string;
  slug:string;
}
export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[];
  metacritic:number;
}

interface FetchGamesResponce {
  count: number;
  results: Game[];
}

const useGames=()=>{


    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading,setLoading]= useState(false);
    
    useEffect(() => {
        const controller =   new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGamesResponce>("/games",{signal:controller.signal})
        .then((res) => {
            setGames(res.data.results)
            setLoading(false)
                })
        .catch((err) => {
            if(err instanceof CanceledError ) return;
            setError(err.message)
            setLoading(true);
                });
        return () => controller.abort();
    },[]);

        return{error,games , loading};   
}   

export default useGames;