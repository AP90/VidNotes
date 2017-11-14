import React from "react";


export default class Email extends React.Component {

    handleEmailBtnClick = () => {
        let email = $(".input--email").val();

        // validate email before sending
        let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.match(emailformat)) {  
            $(".email__error").hide();
            let notes = this.props.notes.map((note) => {
                return `<p>${note}</p>`;
            }).join("");
    
            emailjs.send("yandex", "vidnotes", {"user_email": email,"user_notes": notes});

            // inform user email has been sent and clear field
            alert("email sent");
            $(".input--email").val("");
        } else {
            // alert("please enter a valid email");
            $(".email__error").show();
            $(".input--email").addClass("animated shake")
            setTimeout(() => {
                $(".input--email").removeClass("animated shake");
            }, 1000);
        }        
    }


    render() {
        return (
            <div className="email">
                <h2><span className="glyphicon glyphicon-envelope"></span> Send</h2>
                    <p className="animated fadeIn email__error">Please enter a valid email address</p>
                    <input type="text" className="input--shadow input--email" placeholder="youremail@example.com"/>
                    <button className="btn--search" onClick={this.handleEmailBtnClick}>
                        <span className="glyphicon glyphicon-send"></span>
                    </button>
                    
            </div>
        )
    }
}