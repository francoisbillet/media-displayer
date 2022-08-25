import React, {useState, useEffect} from "react";
import Button from "./Button";
import "./Header.css";

const initializeDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
}

const Header = () => {
    const [time, setTime] = useState(initializeDate());

    useEffect(() => {
        const updateTimeInterval = setInterval(() => {
            setTime(initializeDate());
        }, 60000);
        return () => clearInterval(updateTimeInterval);
    }, [])

    return (
        <header className="header">
            <div className="dateOfTheDay">{time}</div>
            <Button />
        </header>
    )
}

export default Header;