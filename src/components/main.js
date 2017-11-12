import React from "react";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            YTUrl: "https://www.youtube.com/embed/9rPOuZ4vY50",
            videoId: "9rPOuZ4vY50"
        }
    }

    render() {
        return (
            <main>
                <div>
                    <input type="text" className="input--shadow" placeholder=""/>
                    <button className="btn--search">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </div>
                <div className="container">
                    <div className="row">
                        <h2><span className="glyphicon glyphicon-pencil"></span> Enter Notes Below</h2>
                        <div className="col-md-6 col-sm-12">
                            <iframe src={`https://www.youtube.com/embed/${this.state.videoId}`} frameBorder="0"></iframe>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <textarea name="" id="" cols="50" rows="5"></textarea>
                            <div>    
                                <button className="btn--addnote"><span className="glyphicon glyphicon-plus"></span> Add Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

