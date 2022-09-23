import React, { Component } from 'react';

class IntroClassCompo extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <p><strong>Class Component</strong> meanse the component will be created by class and <b>Class</b> means collection of data member and member function only</p>
                            class classname&#123; fun()&#123; &#125; &#125;
                            <p>FOR ACCESSING class data in reactjs we hv render method</p>
                            <p>here in react we are always comnsider class as component thats why we are never created its object we just called that component by its name with angularbracket &lt;classname&gt;  </p>
                            <p>render method will be inherited from React.Component class which we have to extends in our class for getting output from thay class with render and JSX data without creating an object</p>
                            <p>export default is module of javascript</p>
                            <p>JSX =&gt; javascript + HTML</p>
                            <p>JSX =&gt; will be compiled by babel</p>
                            <p>babel =&gt; is interpretor/compiler of JSX </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default IntroClassCompo;


// import React from 'react';

// const IntroClassCompo = () => {
//     return (
//         <>
//             <div className='container'>
//                 <div className="row">
//                     <div className="col">
//                         <p><strong>Class Component</strong> meanse the component will be created by class and <b>Class</b> means collection of data member and member function only</p>
//                         class classname&#123; fun()&#123; &#125; &#125;
//                         <p>FOR ACCESSING class data in reactjs we hv render method</p>
//                         <p>here in react we are always comnsider class as component thats why we are never created its object we just called that component by its name with angularbracket &lt;classname&gt;  </p>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default IntroClassCompo;