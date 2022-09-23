import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HeaderCompo from './../../mainheader';

const MainFunctionalCompo = () => {
    return (
        <>
           <div className="container">
                <div className="row">

                    <div className="col-md-4 offset-md-8 ">
                        <ol>
                            <li><Link to="/example/functionalcompo">Welcome to Functional Component</Link></li>
                            <li><Link to="hooksintrocompo">Hooks In ReactJs</Link></li>
                            <li><Link to="useeffectexample">useEffect Hooks </Link></li>
                            <li><Link to="useeffectapiexample">useEffect API Hooks </Link></li>
                            <li><Link to="useeffectapiexamplecondition">useEffect Conditional </Link></li>
                            <li><Link to="uselayouteffect">useLayoutEffect </Link></li>
                            <li><Link to="usecontext">useContext </Link></li>
                            <li><Link to="usecontextdifile">useContext Different file </Link></li>
                            <li><Link to="usereducer">useReducer</Link></li>
                            <li><Link to="usecallback">useCallback</Link></li>
                            <li><Link to="usememoexample">useMemo</Link></li>
                            <li><Link to="userefexample">useRef</Link></li>
                            <li><Link to="customhook">Custom Hook</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>  
        </>
    );
};

export default MainFunctionalCompo;