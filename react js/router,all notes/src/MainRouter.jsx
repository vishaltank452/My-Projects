import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './about';
import Contact from './contact';
import Examples from './example';
import HomePage from './HomePage.jsx';
// import CommonExmaples from './CommonExmaples.jsx';
// import MainHeader from './mainheader';

function MainRouter(props) {
    const CommonCompoLazy = React.lazy(()=> import("./component/CommonComponent/CommonCompoRouter"))
    const ClassCompoLazy = React.lazy(() => import("./component/ClassComponent/ClassCompoRouter"));
    const FunctionalCompoLazy = React.lazy(()=>import("./component/FunctionalComponent/FunctionalCompoRouter.jsx"));
    return (
        <>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/example/*" element={<Examples />} >
                <Route path="commoncompo/*" element={<Suspense fallback={<h1>Lodding...</h1>}> <CommonCompoLazy/></Suspense>} />
                <Route path="classcompo/*" element={<Suspense fallback={<h1>Loding...</h1>}> <ClassCompoLazy /></Suspense>} />
                <Route path="functionalcompo/*" element={<Suspense fallback={<h1>Loding...</h1>}> <FunctionalCompoLazy /></Suspense>} />
                {/* <Route path="teams" element={<Teams />}>
                    <Route path=":teamId" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} />
                </Route> */}
                </Route>
            </Routes>
        </>
    );
}

export default MainRouter;