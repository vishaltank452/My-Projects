import React from 'react';
import { useEffect } from 'react';

const UseEffectHooksFuncAPICompo = () => {

    useEffect(() => {
        // fetch_function().then_promise_for_conver_response().then_promise_for_get_data_response()
        return () => { fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => { console.log(res); }) }
    })

    return (
        <>
            <h2>Promise</h2>
            <p><i> pending:</i> initial state, neither fulfilled nor rejected.</p>
            <p><i> fulfilled:</i> meaning that the operation was completed successfully.</p>
            <p><i> rejected:</i> meaning that the operation failed.</p>
            new Promise((resolveOuter) =&gt; &#123; <br />
            resolveOuter( <br />
            new Promise((resolveInner) =&gt; &#123; <br />
            setTimeout(resolveInner, 1000); <br />
            &#125;) <br />
            ); <br />
            &#125;);


            <p>const myPromise = new Promise((resolve, reject) =&gt; &#123; <br />
                setTimeout(() =&gt; &#123; <br />
                resolve("foo");
                &#125;, 300);
                &#125;);

                myPromise
                .then(handleFulfilledA, handleRejectedA)
                .then(handleFulfilledB, handleRejectedB)
                .then(handleFulfilledC, handleRejectedC);</p>
        </>
    );
};

export default UseEffectHooksFuncAPICompo;