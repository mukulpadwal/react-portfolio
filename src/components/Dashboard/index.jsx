import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Form from "./Form.jsx";
import Login from "../Login/index.jsx";

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);

    return (
        <div>
            {user ? <Form /> : <Login />}
        </div>
    )
}

export default Dashboard;