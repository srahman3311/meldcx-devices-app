import { useEffect, useState } from "react";

// Stylesheet
import styles from "./Devices.module.css";

// Components
import Cirlces from "../reuseable-components/circles/Circles";

function Devices() {

    return (
        <div className = {styles.devices}>
            <div className = {styles.devices_content}>
                <h2>Hello World</h2>
            </div>
            <Cirlces />
        </div>
    );
}


export default Devices;