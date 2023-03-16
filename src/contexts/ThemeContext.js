import React, { createContext } from "react"

export const ThemeContext =createContext();

class ThemeContextProvider extends React.Component{
    state={
        isDarkTheme:true,
        lightTheme:{
            text:"#0000ff",
            background:"#08800"

        },
        darkTheme:{
            text:'#fff',
            background:"#ff0000"

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