import React from "react";

export default class Email extends React.Component {
    render() {
        return (
            <div className="email">
                <h2><span className="glyphicon glyphicon-envelope"></span> Send</h2>
                    <input type="text" className="input--shadow" placeholder=""/>
                    <button className="btn--search">
                        <span className="glyphicon glyphicon-send"></span>
                    </button>
            </div>
        )
    }
}