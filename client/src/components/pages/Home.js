import React from "react";
import "./Home.css"
import {
    Link
} from "react-router-dom";

function learnPath () {<Link to="/learn" className={window.location.pathname === "/learn"}/>}

const Home = (props) => (


    <div>
        <div className="head" id="head">
            <header>
                <div className="logo">
                    {/* <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png"> */}
                </div>
            </header>
        </div>
        <div className="container-fluid">
            <div>
                <div className="row">

                    <div className="col-3 userWidget" id="userWidget">
                        <div className="widgetSprite" id="widgetSprite">
                            <img id="placeholder" alt="profilePicture" src="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-profile-picture-icon.jpg" />
                        </div>
                        <div className="widgetName" id="widgetName">

                            <h3> {props.user.firstName} {props.user.lastName} </h3>
                            <h6 className="gemsTotal" id="gemsTotal">My Account</h6>

                            <h3> {props.user.email}</h3>
                            <h6 className="gemsTotal" id="gemsTotal">Gems: 20</h6>

                            <br />
                            <div className="catalogContainer" id="catalogContainer">
                                <div className="courseCatalog" id="coursecatalog">
                                    <div className="row">
                                        <div className="col">
                                            <h5>My Courses</h5>
                                            <p>Astronomy</p>
                                            <p>Geometry</p>
                                            <p>World Cvilization</p>
                                        </div>
                                        <div className="col">
                                            <h5>Score</h5>
                                            <p>100%</p>
                                            <p>90%</p>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="findCourseWidget" id="findCourseWidget">
                            <Link to="/learn">
                            <button type="button" className="btn btn-primary" id="findCourseButton">Start/Unlock New Course</button>
                            </Link>
                        </div>

                    </div>
                    <div className="col-8">

                        <div>
                            <div className="container homeContainer">
                                <div className="introBanner" id="introBanner">
                                    <h2 id="welcomeUsername">Welcome: {props.user.firstName} {props.user.lastName}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <button type="button" className="btn btn-primary containerButtons">Continue Course</button>
                                    </div>
                                    <div className="col-sm">
                                        <button type="button" className="btn btn-primary containerButtons">Start New Course</button>
                                    </div>
                                    <div className="col-sm">
                                        <button type="button" className="btn btn-primary containerButtons">Check Progess</button>
                                    </div>
                                </div>
                                <div className="blog" id="blog">
                                    <div className="blogHeader" id="blogHeader">
                                        <h2>News</h2>
                                    </div>
                                    <div className="blogContent" id="blogContent">
                                        <ul>
                                            <li>
                                                <h5>New Calulus Course is here!</h5>
                                                <p>Students who excel in math and would like to sharpen their skills will be very glad for our latest update.
                        </p>
                                            </li>
                                            <li>
                                                <h5>PolarisPoint to be purchased by Google for $1.4 billion</h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sed ratione
                                                  pariatur itaque modi aliquid veritatis natus sapiente quasi aspernatur esse
                                                  aut debitis, velit doloribus adipisci aperiam? Culpa, doloremque quae.
                        </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >









);

export default Home;