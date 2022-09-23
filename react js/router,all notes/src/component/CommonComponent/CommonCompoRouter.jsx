import React from "react";
import { Route,Routes } from "react-router-dom";
import MainCommonCompo from "./MainCommonCompo";

import Props from "./01Props";
import PropsFun from "./01.2PropsFun";
import PropsClass from "./01.32PropsClass.jsx";
import Lifecycle from "./02Lifecycle";
import LifecycleRender from "./02.2LifecycleRender.jsx";
import State from "./03state.jsx";
import EventHan from "./04EventHan.jsx";

const CommonCompoRouter = () => {
    return (
        <>
           <Routes>
             <Route path="/" element={<MainCommonCompo/>}>
                <Route path="/props" element={<Props/>} />
                <Route path="/propsfun" element={<PropsFun/>} />
                <Route path="/propsClass" element={<PropsClass/>} />
                <Route path="/lifecycle" element={<Lifecycle/>} />
                <Route path="/lifecycleRender" element={<LifecycleRender/>} />
                <Route path="/state" element={<State/>} />
                <Route path="/EventHan" element={<EventHan/>} />
             </Route>
           </Routes>  
        </>
    );
}

export default CommonCompoRouter;