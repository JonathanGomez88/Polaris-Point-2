import React from "react";

const Accounts = () => (
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
                            <img id="placeholder" src="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-profile-picture-icon.jpg" />
                        </div>
                        <div className="widgetName" id="widgetName">
                            <h3> Users Name </h3>
                            <h6 className="gemsTotal" id="gemsTotal">My Account</h6>
                            <br />
                            <div className="catalogContainer" id="catalogContainer">
                                <div className="courseCatalog" id="coursecatalog">
                                    <div className="row">
                                        <div className="col">
                                            <h5>My Courses</h5>
                                            <p>Astronomy 101</p>
                                            <p>Geometry 101</p>
                                            <p>World Cvilization</p>
                                        </div>
                                        <div className="col">
                                            <h5>Completion</h5>
                                            <p>76%</p>
                                            <p>21%</p>
                                            <p>24%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="findCourseWidget" id="findCourseWidget">
                            <button type="button" className="btn btn-primary" id="findCourseButton">Start/Unlock New Course</button>
                        </div>

                    </div>
                    <div className="col-8">
                        <div>
                            <div className="container">
                                <div className="introBanner" id="introBanner">
                                    <h2 id="welcome">My Account</h2>
                                </div>
                                <div className="blog" id="blog">
                                    <div className="blogHeader" id="blogHeader">
                                        <h3>User Info</h3>
                                    </div>
                                    <div className="blogContent" id="blogContent">

                                        <div>
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>First Name: </td>
                                                        <td>Dan</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Last Name</td>
                                                        <td>Jones</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Email Address: </td>
                                                        <td>username@email.com</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <h3>Edit Courses</h3>
                                        </div>
                                        <div>
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Astronomy 101</td>
                                                        <td><button type="button" className="btn btn-primary" id="editCourse">remove</button></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Geometry 101</td>
                                                        <td><button type="button" className="btn btn-primary" id="editCourse">remove</button></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>World Civilization 101</td>
                                                        <td><button type="button" className="btn btn-primary" id="editCourse">remove</button></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

export default Accounts;