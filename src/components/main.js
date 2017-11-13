import React from "react";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "https://www.youtube.com/embed/9rPOuZ4vY50"
        }
    }
    
    handleOnClick = () => {
        let userUrl = $(".input--search").val();
        if (userUrl.indexOf("https://www.youtube.com/watch?v=") === - 1) {
            alert("Please enter a valid YouTube url");
        } else {
            let url = userUrl.replace("watch?v=", "embed/");
            this.setState({url});
            $(".input--search").val("");
        }
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            this.handleOnClick();
        }
    }

    handleAddNote = () => {
        let note = $("textarea").val();
        if (note.length > 0) {
            this.props.addNote(note);
            $("textarea").val("");
        } else {
            alert("please enter a note");
        }
    }

    render() {
        return (
            <main>
                <div className="searchbox">
                <h2><span className="glyphicon glyphicon-globe"></span> Enter URL</h2>
                    <input 
                        type="text" 
                        className="input--shadow input--search" 
                        onKeyPress={this.handleKeyPress} 
                        placeholder="https://www.youtube.com/watch?v=9rPOuZ4vY50"
                    />
                    <button className="btn--search" onClick={this.handleOnClick}>
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <h2><span className="glyphicon glyphicon-pencil"></span> Enter Notes</h2>
                        <div className="col-md-6 col-sm-12">
                            <iframe src={this.state.url} frameBorder="0"></iframe>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <textarea name="" id="" cols="50" rows="5"></textarea>
                            <div>    
                                <button className="btn--addnote" onClick={this.handleAddNote}><span className="glyphicon glyphicon-plus"></span> Add Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

