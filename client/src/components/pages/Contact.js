import React from "react";
import {
    Link,
    Route
} from "react-router-dom";
import "./contact.css"


const styledDivL = {
    width: '100px',
    height: '800px',
    background: 'black',
    float: 'left'
};


const styledDivR = {
    width: '100px',
    height: '800px',
    background: 'black',
    right: '0px',
    top: '0px',
    marginTop: '42px',
    position: 'absolute'
};


const styledDivM = {
    marginLeft: '10%',
    marginRight: '10%'
};





const Contact = props => (
    <div>
        <div className="content">
            <div className="contactContent">
                <h1> Contact Page </h1>
                <p>
                    Send us an email to get in contact with us!
                </p>
                <div>
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" className="name" placeholder="Your Name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" className="email" placeholder="Your email" />
                        </div>
                        <div>
                            <label>Name</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." />
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div >
);

export default Contact;