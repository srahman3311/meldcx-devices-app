// Stylesheet
import styles from "./Circles.module.css";



function Cirlces() {

    return(
        <div className = {styles.orbitting_sun_moon}>
            <div className = {styles.sun}></div>
            <div className = {styles.moon}></div>
        </div>
    );
}


export default Cirlces;