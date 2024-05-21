export default function Dashboard() {
    return (
        <div id="wd-dashboard" style={{ paddingLeft: "40px"}}>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100" style={{width: "280px", marginBottom: "30px"}}>
                            <img src="/images/reactjs.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/dms.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS5200 Database Management Systems
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Bridge to the Bridge
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/ifcs.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS5001 Intensive Foundations of Computer Science
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Principles of Systematic Problem Solving through Programming
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/discretestructures.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5002 Discrete Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Mathematical Structures and Methods
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/ood.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5004 Object Oriented Design
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Object-Oriented Concepts and Solution Design in Java
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/algorithms.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5800 Algorithms
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Algorithmic Design Paradigms
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/ai.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5100 Foundations of Artificial Intelligence
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Heuristic Search and Game Trees
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/softwareengineering.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5500 Foundations of Software Engineering
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Software Development Engineer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/computergraphics.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5310 Computer Graphics
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Fundamentals of 2D and 3D Computer Graphics
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/computervision.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5330 Pattern Recognition and Computer Vision
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Fundamental Techniques for Low-level and High-level Computer Vision
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/interaction.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS 5340 Computer/Human Interaction
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Principles of Human-computer Interaction and the Design of User Interfaces
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}>
                        <div className="card h-100">
                            <img src="/images/algebra.jpg" className="course-image"/>
                            <div className="card-body d-flex flex-column">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    Align Math Foundations
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Algebra and Number Theory
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}