import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Stylesheet
import styles from "./App.module.css";

// Components
import Login from "./components/login/Login";
import Devices from "./components/devices/Devices";



function App() {

    return (
        <div className={styles.App}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/devices" element={<Devices />} />
                </Routes>
            </Router>
        </div>
    );
}



export default App;


