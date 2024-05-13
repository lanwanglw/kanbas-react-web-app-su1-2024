export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/alignmathfoundations.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            Align Math Foundations
                        </a>
                        <p className="wd-dashboard-course-title">
                            Algebra, Number Theory, Probability & Statistics
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/dms.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            Database Management Systems
                        </a>
                        <p className="wd-dashboard-course-title">
                            Bridge to the Bridge
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/ifcs.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5001 Intensive Foundations of Computer Science
                        </a>
                        <p className="wd-dashboard-course-title">
                            Principles of Systematic Problem Solving through Programming
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/discretestructures.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS 5002 Discrete Structures
                        </a>
                        <p className="wd-dashboard-course-title">
                            Mathematical Structures and Methods
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/ood.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS 5004 Object Oriented Design
                        </a>
                        <p className="wd-dashboard-course-title">
                            Object-Oriented Concepts and Solution Design in Java
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/algorithms.jpg" width={200} height={100}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS 5800 Algorithms
                        </a>
                        <p className="wd-dashboard-course-title">
                            Mathematical Techniques for the Design and Analysis of Computer Algorithms
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go</a>
                    </div>
                </div>
            </div>
        </div>
    );
}