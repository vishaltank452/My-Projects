
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainFunctionalCompo from './MainFunctionalCompo.jsx';
import IntroFunctionalCompo from './IntroFunctionalCompo.jsx';
import HooksIntroFuncCompo from './HooksIntroFuncCompo.jsx';
import UseEffectHooksFuncCompo from './02UseEffectHooksFuncCompo.jsx';
import UseEffectHooksFuncAPICompo from './03UseEffectHooksFuncAPICompo.jsx';
import UseEffectHooksFuncAPICompoCondition from './04UseEffectHooksFuncAPICompoCondition.jsx';
import UseLayoutEffectHooks from './05UseLayoutEffectHooks.jsx';
import UseContextHooks from './06useContext/01SingleFileUseContext';
import MultipleFileUseContext from './06useContext/02MultipleFileUseContext';
import UsereducerExample from './07UseReducerExample';
import UsecallBackExample from './08usecallback.jsx';
import UseMemoExample from './09UseMemoExample.jsx';
import UseRefExample from './10UseRefExample';
import CustomHookExample from './11CustomHook/CustomHookExample.jsx';
const ClassCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainFunctionalCompo />} >
                    
                    <Route index element={<IntroFunctionalCompo />} />
                    <Route path="hooksintrocompo" element={<HooksIntroFuncCompo />} />
                    <Route path="useeffectexample" element={<UseEffectHooksFuncCompo />} />
                    <Route path="useeffectapiexample" element={<UseEffectHooksFuncAPICompo />} />
                    <Route path="useeffectapiexamplecondition" element={<UseEffectHooksFuncAPICompoCondition />} />
                    <Route path="uselayouteffect" element={<UseLayoutEffectHooks />} />
                    <Route path="usecontext" element={<UseContextHooks />} />
                    <Route path="usecontextdifile" element={<MultipleFileUseContext />} />
                    <Route path="usereducer" element={<UsereducerExample />} />
                    <Route path="usecallback" element={<UsecallBackExample />} />
                    <Route path="usememoexample" element={<UseMemoExample />} />
                    <Route path="userefexample" element={<UseRefExample />} />
                    <Route path="customhook" element={<CustomHookExample />} />
                </Route>
            </Routes>
        </>
    );
};

export default ClassCompoRouter;