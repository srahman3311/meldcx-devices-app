// Stylesheet
import styles from "./Circles.module.css";



function Cirlces() {

    return(
        <div className = {styles.orbitting_sun_moon}>
            <div class = {styles.sun}></div>
            <div class = {styles.moon}></div>
        </div>
    );
}


export default Cirlces;