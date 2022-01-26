// Stylesheet
import styles from "./Messages.module.css";



function ValidationErrorMessage ({ value, validationError, message }) {
    
    const inlineStyle = {
        display: validationError && !value ? "block" : "none", 
        color: "red"
    }


    return (
        <div className = {styles.validation_error_message} style = {inlineStyle}>
            {message}
        </div>
    );

}


export default ValidationErrorMessage;