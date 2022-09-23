import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MainHeader from './mainheader';
const Examples = (props) => {
    return (
        <>
            <MainHeader />
            <div className="container">
                <h2 className='text-center my-3'>My React World Examples</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3><Link to="/example/commoncompo">Common Examples</Link></h3>
                    </div>
                    <div className="col-md-4">
                        <h3><Link to="/example/classcompo">Class Component</Link></h3>
                    </div>
                    <div className="col-md-4">
                        <h3><Link to="/example/functionalcompo">Functional Component</Link></h3>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
}
export default Examples;