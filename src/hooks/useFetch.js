import { useEffect,useState,useCallback } from "react";

export default function useFetch(url,options={}){

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url,{
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    ...options
                })

                if(!response.ok){
                    throw new Error("could not fetch, status : "+response.status)
                }
                
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false)
            }
            
        }

        fetchData()
    },[url])

    return {data,loading,error}
}