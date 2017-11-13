import React from "react";


const Notes = (props) => {    
    const noteList = props.notes.map((note, index) => 
        <div className="notes--note" key={index}>{note}</div>
    );

    return (
        <div className="notes">
            <h2><span className="glyphicon glyphicon-pencil"></span> Notes</h2>
            {props.notes.length > 0 ? noteList : <p>You haven't added any notes yet</p>}
        </div>
    )
}

export default Notes;