import React, { createContext } from "react"

export const ThemeContext =createContext();

class ThemeContextProvider extends React.Component{
    state={
        isDarkTheme:true,
        lightTheme:{
            text:"#000000",
            background:"#FFFFE0"

        },
        darkTheme:{
            text:'#fff',
            background:"#A52A2A"

        }

    }
    changeTheme=()=>{
        this.setState({isDarkTheme : !this.state.isDarkTheme});
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>

        );
    }
}
export default ThemeContextProvider;