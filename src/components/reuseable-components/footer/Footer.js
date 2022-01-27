import { useNavigate } from "react-router-dom";
import axios from "axios";

// Stylesheet
import styles from "./Footer.module.css";

// Components
import TransparentDiv from "../transparent-div/TransparentDiv";
import Button from "../others/Button";


function Footer({ style }) {

    const navigate = useNavigate();

    async function notify() {

        const endpoint = "http://35.201.2.209:8000/notify";

        const requestBody = {
            name: "Samsur Rahman Rafez",
            email: "samsur.rahman3311@gmail.com",
            repoUrl: "https://github.com/srahman3311/meldcx-devices-app",
            message: "I have finished your app and learned a lot of stuffs building it"
        }

        const config = {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("authToken") }` 
            }
        }
        
        try {

            const response = await axios.post(endpoint, requestBody, config);
            alert(response.data);

        } catch(error) {

            alert(error.response.data);

        } 
    }

    function logUserOut() {

        localStorage.clear();
        navigate("/");

    }

    return (

        <div className = {styles.footer} style = {style && style}>
            <TransparentDiv />
            <div className = {styles.footer_content}>
                <Button 
                    text = "NOTIFY" 
                    clickHandler = {notify} 
                    style = {{
                        backgroundColor: "white",
                        color: "black",
                        padding: "7px 30px",
                        borderRadius: "5px"
                    }} 
                />
                <Button 
                    text = "LOG OUT" 
                    clickHandler = {logUserOut} 
                    style = {{
                        backgroundColor: "#1A1A40",
                        color: "white",
                        padding: "7px 30px",
                        borderRadius: "5px"
                    }} 
                />
            </div>
        </div>
    )
}


export default Footer;