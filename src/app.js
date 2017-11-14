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
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }
    }

    addNote = (note) => {
        this.setState((prevState, props) => {
            return {notes: [...this.state.notes, note]}
        });
        setTimeout(() => {
            console.log(this.state.notes);
        }, 500)
    }
        


    render() {
        return (
            <div>
                <Navbar />
                <Main addNote={this.addNote}/>
                <Notes notes={this.state.notes}/>
                <Email notes={this.state.notes}/>
                <Footer />
            </div>
        )
    };
};




ReactDOM.render(<App />, document.getElementById("app"));