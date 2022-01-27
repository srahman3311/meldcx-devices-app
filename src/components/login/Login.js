import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


// Stylesheet
import styles from "./Login.module.css";
import commonStyles from "../reuseable-components/others/Common.module.css";


// Components
import Header from "../reuseable-components/others/Header";
import Icon from "../reuseable-components/others/Icon";
import InputField from "../reuseable-components/others/InputField";
import Button from "../reuseable-components/others/Button";
import ValidationErrorMessage from "../reuseable-components/messages/ValidationErrorMessage";
import ServerErrorMessage from "../reuseable-components/messages/ServerErrorMessage";


export default function Login () {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [validationError, setValidationError] = useState(false);
    const [serverErrorMessage, setServerErrorMessage] = useState("");

    useEffect(() => {

        if(localStorage.getItem("authToken")) return navigate("/devices");

    }, [])

    

    function handleChange (event) {

        event.preventDefault();

        // Need to hide server error message if user starts typing the correct credentials
        setServerErrorMessage("");

        const { name, value } = event.target;

        setUserInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            }
        });
    }


    async function login (event) {

        event.preventDefault();

        const { email, password } = userInfo;

        // Form Validation
        if(!email || !password) return setValidationError(true); 

        try {

            const response = await axios.post("http://35.201.2.209:8000/login", userInfo);

            localStorage.setItem("authToken", response.data);

            navigate("/devices");

        } catch(error) {

            setServerErrorMessage(error.response.data);
            
        } 

    }


    
    
    return (
        <div className={styles.login}>
            <div className={styles.login_content}>
                <Header text = "Login" />
                <ServerErrorMessage
                    value = {serverErrorMessage}
                    message = {serverErrorMessage}
                />
                <form className={styles.login_credentials}>
                    <div className= {commonStyles.input_field_container}>
                        <div className = {commonStyles.input_field_content}>
                            <Icon 
                                iconClassName = "fas fa-envelope" 
                                style = {{
                                    width: "10%"
                                }}
                            />
                            <InputField
                                type = "text"
                                name = "email"
                                value = {userInfo.email}
                                placeholder = "Email Address"
                                handleChange = {handleChange}
                                style = {{
                                    width: "90%"
                                }}
                                inputStyle = {{
                                    backgroundColor: "#EEF2FF",
                                    border: "none"
                                }}
                            />
                        </div>
                        <ValidationErrorMessage 
                            value = {userInfo.email}
                            validationError = {validationError}
                            message = "email is needed"
                        />
                    </div>
                   
                    <div className= {commonStyles.input_field_container}>
                        <div className = {commonStyles.input_field_content}>
                            <Icon 
                                iconClassName = "fas fa-unlock-alt" 
                                style = {{
                                    width: "10%"
                                }}
                            />
                            <InputField
                                type = "password"
                                name = "password"
                                value = {userInfo.password}
                                placeholder = "Password"
                                handleChange = {handleChange}
                                style = {{
                                    width: "90%"
                                }}
                                inputStyle = {{
                                    backgroundColor: "#EEF2FF",
                                    border: "none"
                                }}
                            />
                        </div>
                        <ValidationErrorMessage 
                            value = {userInfo.password}
                            validationError = {validationError}
                            message = "password is needed"
                        />
                    </div>
                   
                    <div className = {commonStyles.button_div}>
                        <Button 
                            text = "LOG IN" 
                            clickHandler = {login}
                            style = {{
                                width: "25%",
                                backgroundColor: "#1572A1",
                                padding: "10px 0px"
                            }} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}