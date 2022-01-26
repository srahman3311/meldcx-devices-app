import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

// Stylesheet
import styles from "./Devices.module.css";

// Components
import Cirlces from "../reuseable-components/circles/Circles";



function Devices() {

    const [apiCallCount, setApiCallCount] = useState(1);
    const [activeDevices, setActiveDevices] = useState(0);

    // Custom Hook Call
    const endpoint = "http://35.201.2.209:8000/devices"
    const { data, loading, error } = useAxios(endpoint, `${apiCallCount}`);


    useEffect(() => {

        if(data) setActiveDevices(data.devices.length)
        setTimeout(() => {setApiCallCount(apiCallCount + 1)}, 5000)

    }, [data, apiCallCount]);
    

    return (
        <div className = {styles.devices}>
            <div className = {styles.devices_content}>
                {
                    error 
                    ?
                    <div>Something went wrong</div>
                    :
                    loading 
                    ?
                    <div>Refreshing...</div>
                    :
                    (activeDevices
                    ? 
                    <div>
                        <h2 className = {styles.device_count}>{activeDevices}</h2>
                        <p className = {styles.device_text}>DEVICES</p>
                        <p className = {styles.device_text}>ONLINE</p>
                    </div>
                    
                    :
                    <div></div>)
                }

            </div>
            <Cirlces />
        </div>
    );
}


export default Devices;