import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainClassCompo from './MainClassCompo';
import IntroClassCompo from './01IntroClassCompo';
import ConstructorExample from './02ConstructorExample';
import StateExmaple from './03StateExmaple';
import Lifecycle from './04lifecycle';
import PropsExample from './05props';
import JSXExample from './06jsxprops.jsx';
import ConditionalExample from './07conditionalrend.jsx';
import ControlledExample from './08controlledexample.jsx';
import UncontrolledExample from './09uncontrolledexample.jsx';
import StateBindingWithRest from './10StateBindingWithRest.jsx';
import StateLiftingExample from './11StateLifting/1StateLiftingExample.jsx';
import CompositionvsInheritance from './12CompositionvsInheritance.jsx';
import HOCExample from './20HOC/Example 4/App';
import ArrayExample from './21EindexArray';
import EindexArrayMap from './22EindexArrayMap';
import EindexCssCall from './23EindexCssCall';
import EindexParentChild from './24EindexParentChild';
import EindexThemeButtonDropDown from './25EindexThemeButtonDropDown';
import LoadImg from './18LoadImgFile';
import Metronome from './26Metronome';
const ClassCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainClassCompo />} >
                    <Route path="/introclasscompo" element={<IntroClassCompo />} />
                    <Route path="/constructor" element={<ConstructorExample />} />
                    <Route path="/states" element={<StateExmaple />} />
                    <Route path="/lifecycle" element={<Lifecycle />} />
                    <Route path="/propsexample" element={<PropsExample />} />
                    <Route path="/jsxexample" element={<JSXExample />} />
                    <Route path="/conditionalexample" element={<ConditionalExample />} />
                    <Route path="/controlledexample" element={<ControlledExample />} />
                    <Route path="/uncontrolledexample" element={<UncontrolledExample />} />
                    <Route path="/restopstates" element={<StateBindingWithRest />} />
                    <Route path="/stateliftingexample" element={<StateLiftingExample />} />
                    <Route path="/compositionvsinheritance" element={<CompositionvsInheritance />} />
                    <Route path="/hocexample" element={<HOCExample />} />
                    <Route path="/arrayexample" element={<ArrayExample />} />
                    <Route path="/arraymap" element={<EindexArrayMap />} />
                    <Route path="/csscallexample" element={<EindexCssCall />} />
                    <Route path="/parentchildexample" element={<EindexParentChild />} />
                    <Route path="/themedrpexample" element={<EindexThemeButtonDropDown />} />
                    <Route path="/loadimg" element={<LoadImg />} />
                    <Route path="/metronome" element={<Metronome />} />
                </Route>
            </Routes>
        </>
    );
};

export default ClassCompoRouter;