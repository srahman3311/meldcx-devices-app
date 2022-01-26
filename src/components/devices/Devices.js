import { useEffect, useState } from "react";
import axios from "axios";

// Stylesheet
import styles from "./Devices.module.css";

// Components
import Cirlces from "../reuseable-components/circles/Circles";

function Devices() {

    const [apiCallCount, setApiCallCount] = useState(1);
    const [activeDevices, setActiveDevices] = useState(0);


    useEffect(() => {

        async function fetchDeviceData() {

            const endpoint = "http://35.201.2.209:8000/devices";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            const response = await axios.get(endpoint, config);
            console.log(response.data.devices.length)
            setActiveDevices(response.data.devices.length);
            setApiCallCount(apiCallCount + 1)

        }

     

        if(!activeDevices) {
            fetchDeviceData();
            return
        }

        setTimeout(() => {
            fetchDeviceData();
            setApiCallCount(apiCallCount + 1);
        }, 5000)

      

    }, [apiCallCount]);

    

    return (
        <div className = {styles.devices}>

         
            <div className = {styles.devices_content}>
                {
                    activeDevices
                    ? 
                    <h2>{activeDevices}</h2>
                    :
                    <div></div>
                }

            </div>
            <Cirlces />
        </div>
    );
}


export default Devices;