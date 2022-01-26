// Stylesheet
import styles from "./Messages.module.css";



function ServerErrorMessage ({ value,  message }) {
    

    const inlineStyle = {
        display: value ? "block" : "none", 
        color: "red",
        textAlign: "center",
        marginBottom: "20px"
    }


    return (
        <div className = {styles.server_error_message} style = {inlineStyle}>
            {message}
        </div>
    );

}


export default ServerErrorMessage;