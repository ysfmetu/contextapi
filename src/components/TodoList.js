import React,{useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const TodoList=()=>{
    const {isDarkTheme,darkTheme,lightTheme,changeTheme}=useContext(ThemeContext);
    const theme=isDarkTheme?darkTheme:lightTheme;
    return(
        <div style={{background:theme.background, color:theme.text,height:'140px', textAlign:"center"}}>
        <p className="item"> Plan the family trip</p>
        <p className="item"> Grocery Shopping</p>
        <p className="item"> go for walk</p>
        <button className="ui button primary" onClick={changeTheme}>  Change the Theme</button>
    </div>
    );
}
export default TodoList;