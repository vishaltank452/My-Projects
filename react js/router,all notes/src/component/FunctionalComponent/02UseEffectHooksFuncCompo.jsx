import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { flushSync } from 'react-dom';

const UseEffectHooksFuncCompo = () => {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log("called useEffect");
    // })
    // flushSync(() => {
    //     console.log("called");
    //     // setCount(count + 1) //infinite loop
    // });
    function btnClick() {
        setCount(count + 1)
        console.log("called btn click useEffect");
    }
    return (
        <>
            <h2>UseEffect</h2>
            <button onClick={btnClick}>Click</button>
            {count}
            <p> Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React's render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.</p>

            <p> Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React's purely functional world into the imperative world.</p>

            <p> By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.</p>
            <div>
                useEffect(() =&gt; &#123; <br />
                console.log("called useEffect");<br />
                &#125;)<br />
            </div>
            <h3>Cleaning up an effect</h3>
            <p>Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. For example, to create a subscription:</p>
            <p>useEffect(() =&gt; &#123; <br />
                const subscription = props.source.subscribe(); <br />
                return () =&gt; &#123; <br />
                    // Clean up the subscription <br />
                    subscription.unsubscribe();<br />
                    &#125;<br />
                &#125;);</p>
            <h3>Timing of effects</h3>
            <p>Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event. This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, because most types of work shouldn't block the browser from updating the screen.</p>
            <p>However, not all effects can be deferred. For example, a DOM mutation that is visible to the user must fire synchronously before the next paint so that the user does not perceive a visual inconsistency. (The distinction is conceptually similar to passive versus active event listeners.) For these types of effects, React provides one additional Hook called useLayoutEffect. It has the same signature as useEffect, and only differs in when it is fired.</p>
            <h2>flushSync</h2>
            flushSync(() =&gt; &#123;
            setCount(count + 1);
            &#125;);

            <p> flushSync can significantly hurt performance. Use sparingly.</p>

            <p> flushSync may force pending Suspense boundaries to show their fallback state.</p>

            <p> flushSync may also run pending effects and synchronously apply any updates they contain before returning.</p>

            <p> flushSync may also flush updates outside the callback when necessary to flush the updates inside the callback. For example, if there are pending updates from a click, React may flush those before flushing the updates inside the callback.</p>
            <h2>Conditionally firing an effect</h2>
        </>
    );
};

export default UseEffectHooksFuncCompo;