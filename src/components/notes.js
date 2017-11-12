import React from "react";

export default class Notes extends React.Component {
    render() {
        return (
            <div className="notes">
                <h2><span className="glyphicon glyphicon-pencil"></span> Notes</h2>
                <div className="notes--note">
                    blah blah this is a note about some stuff i like stuff
                </div>
                <div className="notes--note">
                    blah blah this is a note about some stuff i like stuff.
                    blah blah this is a note about some stuff i like stuff
                </div>
            </div>
        )
    }
}