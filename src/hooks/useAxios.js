import { useState, useEffect } from "react";
import axios from "axios";


function useAxios(endpoint, state) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {

        try {

            setLoading(true);

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            const response = await axios.get(endpoint, config);

            setData(response.data)

        } catch (error) {

            setError(true);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        fetchData();

    }, [endpoint, state]); 

    return { data, error, loading };

}


export default useAxios;
