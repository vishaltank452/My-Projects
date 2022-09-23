import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const MainClassCompo = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 offset-md-4 ">
                        <ol>
                            <li><Link to="classcompo">Welcome to Class Component</Link></li>
                            <li><Link to="introclasscompo">Class component Intro</Link></li>
                            <li><Link to="constructor">Constructor</Link></li>
                            <li><Link to="states">State Example</Link></li>
                            <li><Link to="lifecycle">Lifecycle Example</Link></li>
                            <li><Link to="propsexample">Props Example</Link></li>
                            <li><Link to="jsxexample">JSX Example</Link></li>
                            <li><Link to="conditionalexample">Conditional rendering</Link></li>
                            <li><Link to="controlledexample">Controlled Components</Link></li>
                            <li><Link to="uncontrolledexample">Uncontrolled Components</Link></li>
                            <li><Link to="restopstates">Rest Operator State</Link></li>
                            <li><Link to="stateliftingexample">State Lifting</Link></li>
                            <li><Link to="hocexample">High Order Component</Link></li>
                            <li><Link to="arrayexample">Array</Link></li>
                            <li><Link to="arraymap">Array Map</Link></li>
                            <li><Link to="csscallexample">CSS</Link></li>
                            <li><Link to="parentchildexample">Parent child</Link></li>
                            <li><Link to="themedrpexample">Theme Drp </Link></li>
                            <li><Link to="loadimg">Load img</Link></li>
                            <li><Link to="metronome">Metronome</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
            {/* <footer>
            Footer data
            </footer> */}
        </>
    );
}

export default MainClassCompo;