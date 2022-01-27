import { useNavigate } from "react-router-dom";

// Stylesheet
import styles from "./Footer.module.css";

// Components
import TransparentDiv from "../transparent-div/TransparentDiv";
import Button from "../Button";


function Footer({ style }) {

    const navigate = useNavigate();

    function notify() {
        console.log("hello");
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
                        borderRadius: "5px",
        
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