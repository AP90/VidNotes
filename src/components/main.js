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
        if (userUrl.indexOf("youtube") === -1) {
            $(".searchbox__error").show();
            $(".input--search").addClass("animated shake")
            setTimeout(() => {
                $(".input--search").removeClass("animated shake");
            }, 1000);
        } else {
            // check for mobile version
            if (userUrl.indexOf("https://m.") !== -1) {
                userUrl = userUrl.replace("https://m.", "https://www.");
                console.log(userUrl);
            }
            // create embed link and prevent default full screen in mobile
            let url = userUrl.replace("watch?v=", "embed/");
            // .concat("?playsinline=1&webkit-playsinline=1");
            console.log(url);
            this.setState({url});
            $(".searchbox__error").hide();
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
            $(".btn--addnote").addClass("animated bounce");
            $("textarea").val("");
            setTimeout(() => {
                $(".btn--addnote").removeClass("animated bounce");
            }, 1000);
        } else {
            $(".btn--addnote").addClass("animated shake");
            setTimeout(() => {
                $(".btn--addnote").removeClass("animated shake");
            }, 1000);
        }
    }

    render() {
        return (
            <main>
                <div className="searchbox">
                <h2><span className="glyphicon glyphicon-globe"></span> Enter URL</h2>
                    <p className="animated fadeIn searchbox__error">Please enter a valid YouTube URL</p>
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

