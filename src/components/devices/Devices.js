import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

// Stylesheet
import styles from "./Devices.module.css";

// Components
import Cirlces from "../reuseable-components/circles/Circles";
import Footer from "../reuseable-components/footer/Footer";



function Devices() {

    const navigate = useNavigate();

    const [apiCallCount, setApiCallCount] = useState(1);
    const [activeDevices, setActiveDevices] = useState(0);

    // Custom Hook Call
    const url = "http://35.201.2.209:8000/devices"
    const { fetchedData, loading, error } = useAxios("get", url, {}, `${apiCallCount}`);


    useEffect(() => {

        if(!localStorage.getItem("authToken")) return navigate("/");

        if(fetchedData) setActiveDevices(fetchedData.devices.length)
        setTimeout(() => {setApiCallCount(apiCallCount + 1)}, 5000)

    }, [fetchedData]);


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
                    <div>Loading....</div>
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

            <Footer 
                style = {{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: 1
                }}
                
            />
        </div>
    );
}


export default Devices;