import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import './styles/styles.scss';

class App extends React.Component {
    render() {
        return (
            <div>Hello</div>
        )
    };
};




ReactDOM.render(<App />, document.getElementById("app"));