import React from "react";
import { Link,Outlet } from "react-router-dom";


const MainCommonCompo = (props) =>{
    return(
        <>
           <div className="container">
              <div className="row">
                <div className="col">
                    <ol>
                        <li><Link to="props">props</Link></li>
                        <li><Link to="propsfun">propsfun</Link></li>
                        <li><Link to="propsClass">propsclass</Link></li>
                        <li><Link to="lifecycle">lifecycle</Link></li>
                        <li><Link to="lifecycleRender">lifecycleRender</Link></li>
                        <li><Link to="state">state</Link></li>
                        <li><Link to="EventHan">eventhandling</Link></li>
                        
                    </ol>
                </div>
              </div>
           </div>      
           <Outlet></Outlet> 
        </>
    )
}

export default MainCommonCompo