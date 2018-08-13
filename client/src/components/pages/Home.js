import React from "react";

const Home = () => (
    <div>
        <div className="container-fluid">
            <div>
                <div className="row" >
                    <div className="col-3 userWidget" id="userWidget">
                        <div className="widgetSprite" id="widgetSprite">
                        </div> 
                        <div className="widgetName" id="widgetName">
                            <h3>
                                Dan Jones
                            </h3> 
                            
                                <h6 className="gemsTotal" id="gemsTotal" > Gems: 20 </h6> 
                            
                                <h6> My Account </h6> 
                            
                            <div className="catalogContainer" id="catalogContainer">
                                <div className="courseCatalog" id="courseCatalog" >
                                    <div className="row">
                                        <div className="col">
                                            <h5> My Courses </h5>
                                            <p> Astronomy 101 </p> 
                                            <p> Geometry 101 </p> 
                                            <p> World Cvilization </p> 
                                        </div> 
                                        <div className="col" >
                                            <h5> Completion </h5> 
                                            <p> 76 % </p> 
                                            <p> 21 % </p> 
                                            <p> 24 % </p> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                            <div className="findCourseWidget" id="findCourseWidget"> 
                                <button type="button" className="btn btn-primary" id="findCourseButton"> Start / Unlock New Course </button>
                            </div>
                        </div> 
                        <div className="col-9" >
                        <div>
                            <img src="./img/star3.jpg" alt="name" />
                        </div> 
                        <div className="navbar" id="navbar">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                    <ul className="navbar-nav mr-auto" >
                                        <li className="nav-item active" >
                                            <a className="nav-link" href="" > Home <span className="sr-only" > (current) </span> </a> 
                                        </li> 
                                        <li className="nav-item dropdown" >
                                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">My Courses </a> 
                                                <div className="dropdown-menu" ariaLabelledby="navbarDropdown" >
                                                    <a className="dropdown-item" href="" > Astronomy 101 </a> 
                                                    <a className="dropdown-item" href="" > Geometry 101 </a> 
                                                        <div className="dropdown-divider" ></div> 
                                                    <a className="dropdown-item" href="" > World Civilization 101 </a> 
                                                </div> 
                                        </li> 
                                        <li className="nav-item" >
                                            <a className="nav-link" href="" > Browse Courses </a> </li > <li className="nav-item" >
                                            <a className="nav-link"href="" > Support </a> 
                                        </li> 
                                    </ul> 
                                    <form className="form-inline my-2 my-lg-0" >
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" > Search </button> 
                                    </form> 
                                </div> 
                            </nav> 
                        </div> 
                        <div className="introBanner" id="introBanner" >
                            <h2 id="welcomeUsername" > Welcome: Dan Jones </h2> 
                        </div> 
                        <div>
                            <div className="container">
                                <div className="row" >
                                    <div className="col-sm" >
                                        <button type="button" className="btn btn-primary containerButtons" > Continue Course </button>
                                    </div> 
                                    <div className="col-sm" >
                                        <button type="button" className="btn btn-primary containerButtons" > Start New Course </button> 
                                    </div> 
                                    <div className="col-sm" >
                                        <button type="button" className="btn btn-primary containerButtons" > Find Course </button> 
                                    </div> 
                                </div> 
                                <div className="blog" id="blog" >
                                    <div className="blogHeader" id="blogHeader" >
                                        <h2 > News </h2> 
                                    </div> 
                                    <div className="blogContent" id="blogContent" >
                                        <ul>
                                            <li>
                                                <h5> New Calulus Course is here! </h5> 
                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint voluptate quas mollitia accusantium architecto natus provident deleniti doloribus repudiandae quaerat ? Natus rem dignissimos totam quas aspernatur architecto quod repellendus ? Illo!
                                                    </p> 
                                            </li> 
                                            <li>
                                                <h5> PolarisPoint to be purchased by Googlefor $1 .4 billion </h5> 
                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur, sed ratione pariatur itaque modi aliquid veritatis natus sapiente quasi aspernatur esse aut debitis, velit doloribus adipisci aperiam ? Culpa, doloremque quae. 
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
</div> 
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                
export default Home;