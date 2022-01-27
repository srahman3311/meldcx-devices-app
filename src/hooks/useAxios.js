import { useState, useEffect } from "react";
import axios from "axios";


function useAxios(method, url, data, state) {

    const [fetchedData, setFetchedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {

        const fetchData = async () => {

            try {
    
                setLoading(true);
    
                const options = {
                    headers: { Authorization: `Bearer ${ localStorage.getItem("authToken") }` },
                    method,
                    data,
                    url
                }
    
                const response = await axios(options);
                setFetchedData(response.data);
    
            } catch (error) {
    
                setError(true);
    
            } finally {
    
                setLoading(false);
    
            }
    
        }
    
        fetchData();

    }, [state]); 


    return { fetchedData, error, loading };

}


export default useAxios;
