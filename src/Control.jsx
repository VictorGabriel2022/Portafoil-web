import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function Control(){
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    useEffect(() => {
      document.body.setAttribute('data-theme', theme);
    }, [theme]);
    return(
      <div className="control">
       <span>Home</span>
        <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
      </div>
    )
}
export default Control