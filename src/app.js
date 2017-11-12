import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import './styles/styles.scss';
import Navbar from "./components/navbar";
import Main from "./components/main";
import Notes from "./components/notes";
import Email from "./components/email";
import Footer from "./components/footer";



class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Main />
                <Notes />
                <Email />
                <Footer />
            </div>
        )
    };
};




ReactDOM.render(<App />, document.getElementById("app"));