import React, { Component } from "react";

const ThemeContext = React.createContext("light");

class App extends Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends Component {
    static contextType = ThemeContext;

    componentDidMount() {
        console.log(this.context);
    }
    
    render() {
        return <button theme={this.context} />
    }
}

export default ThemedButton;