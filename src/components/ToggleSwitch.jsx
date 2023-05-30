import React, { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

const ToggleSwitch = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggle = (selectedTheme) => {
        if (selectedTheme !== theme) {
            toggleTheme(selectedTheme);
          }
    };

    return(
        <>
            <label className="switch">
                <button onClick={() => handleToggle("light")}>Light</button>
                <button onClick={() => handleToggle("dark")}>Dark</button>
                <button onClick={() => handleToggle("hacker")}>"Hacker"</button>
            </label>
        </>
    );
};

export default ToggleSwitch;