import React from 'react';

const IntroFunctionalCompo = () => {
    return (
        <>
            Example<table className="wikitable">
                <caption>Versions
                </caption>
                <tbody><tr>
                    <th>Version
                    </th>
                    <th>Release Date
                    </th>
                    <th>Changes
                    </th></tr>
                    <tr>
                        <td>0.3.0
                        </td>
                        <td>29 May 2013
                        </td>
                        <td>Initial Public Release
                        </td></tr>
                    <tr>
                        <td>0.4.0
                        </td>
                        <td>20 July 2013
                        </td>
                        <td>Support for comment nodes <code className="nowrap" >&lt;div&gt;{/* */}&lt;/div&gt;</code>, Improved server-side rendering APIs, Removed React.autoBind, Support for the key prop, Improvements to forms, Fixed bugs.
                        </td></tr>
                    <tr>
                        <td>0.5.0
                        </td>
                        <td>20 October 2013
                        </td>
                        <td>Improve Memory usage, Support for Selection and Composition events, Support for getInitialState and getDefaultProps in mixins, Added React.version and React.isValidClass, Improved compatibility for Windows.
                        </td></tr>
                    <tr>
                        <td>0.8.0
                        </td>
                        <td>20 December 2013
                        </td>
                        <td>Added support for rows &amp; cols, defer &amp; async, loop for <code className="nowrap" >&lt;audio&gt;</code> &amp; <code className="nowrap" >&lt;video&gt;</code>, autoCorrect attributes. Added onContextMenu events, Upgraded jstransform and esprima-fb tools, Upgraded browserify.
                        </td></tr>
                    <tr>
                        <td>0.9.0
                        </td>
                        <td>20 February 2014
                        </td>
                        <td>Added support for crossOrigin, download and hrefLang, mediaGroup and muted, sandbox, seamless, and srcDoc, scope attributes, Added any, arrayOf, component, oneOfType, renderable, shape to React.PropTypes, Added support for onMouseOver and onMouseOut event, Added support for onLoad and onError on <code className="nowrap" >&lt;img&gt;</code> elements.
                        </td></tr>
                    <tr>
                        <td>0.10.0
                        </td>
                        <td>21 March 2014
                        </td>
                        <td>Added support for srcSet and textAnchor attributes, add update function for immutable data, Ensure all void elements don't insert a closing tag.
                        </td></tr>
                    <tr>
                        <td>0.11.0
                        </td>
                        <td>17 July 2014
                        </td>
                        <td>Improved SVG support, Normalized e.view event, Update $apply command, Added support for namespaces, Added new transformWithDetails API, includes pre-built packages under dist/, MyComponent() now returns a descriptor, not an instance.
                        </td></tr>
                    <tr>
                        <td>0.12.0
                        </td>
                        <td>21 November 2014
                        </td>
                        <td>Added new features Spread operator (  ...  ) introduced to deprecate this.transferPropsTo, Added support for acceptCharset, classID, manifest HTML attributes, React.addons.batchedUpdates added to API, @jsx React.DOM no longer required, Fixed issues with CSS Transitions.
                        </td></tr>
                    <tr>
                        <td>0.13.0
                        </td>
                        <td>10 March 2015
                        </td>
                        <td>Deprecated patterns that warned in 0.12 no longer work, ref resolution order has changed, Removed properties this._pendingState and this._rootNodeID, Support ES6 classes, Added API React.findDOMNode(component), Support for iterators and immutable-js sequences, Added new features React.addons.createFragment, deprecated React.addons.classSet.
                        </td></tr>
                    <tr>
                        <td>0.14.1
                        </td>
                        <td>29 October 2015
                        </td>
                        <td>Added support for srcLang, default, kind attributes, and color attribute, Ensured legacy .props access on DOM nodes, Fixed scryRenderedDOMComponentsWithClass, Added react-dom.js.
                        </td></tr>
                    <tr>
                        <td>15.0.0
                        </td>
                        <td>7 April 2016
                        </td>
                        <td>Initial render now uses document.createElement instead of generating HTML, No more extra <code className="nowrap" >&lt;span&gt;</code>s, Improved SVG support, <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">ReactPerf.getLastMeasurements()</code> is opaque, New deprecations introduced with a warning, Fixed multiple small memory leaks, React DOM now supports the cite and profile HTML attributes and cssFloat, gridRow and gridColumn CSS properties.
                        </td></tr>
                    <tr>
                        <td>15.1.0
                        </td>
                        <td>20 May 2016
                        </td>
                        <td>Fix a batching bug, Ensure use of the latest object-assign, Fix regression, Remove use of merge utility, Renamed some modules.
                        </td></tr>
                    <tr>
                        <td>15.2.0
                        </td>
                        <td>1 July 2016
                        </td>
                        <td>Include component stack information, Stop validating props at mount time, Add React.PropTypes.symbol, Add onLoad handling to <code className="nowrap" >&lt;link&gt;</code> and onError handling to <code className="nowrap" >&lt;source&gt;</code> element, Add <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">isRunning()</code> API, Fix performance regression.
                        </td></tr>
                    <tr>
                        <td>15.3.0
                        </td>
                        <td>30 July 2016
                        </td>
                        <td>Add React.PureComponent, Fix issue with nested server rendering, Add xmlns, xmlnsXlink to support SVG attributes and referrerPolicy to HTML attributes, updates React Perf Add-on, Fixed issue with ref.
                        </td></tr>
                    <tr>
                        <td>15.3.1
                        </td>
                        <td>19 August 2016
                        </td>
                        <td>Improve performance of development builds, Cleanup internal hooks, Upgrade fbjs, Improve startup time of React, Fix memory leak in server rendering, fix React Test Renderer, Change trackedTouchCount invariant into a console.error.
                        </td></tr>
                    <tr>
                        <td>15.4.0
                        </td>
                        <td>16 November 2016
                        </td>
                        <td>React package and browser build no longer includes React DOM, Improved development performance, Fixed occasional test failures, update batchedUpdates API, React Perf, and <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">ReactTestRenderer.create()</code>.
                        </td></tr>
                    <tr>
                        <td>15.4.1
                        </td>
                        <td>23 November 2016
                        </td>
                        <td>Restructure variable assignment, Fixed event handling, Fixed compatibility of browser build with AMD environments.
                        </td></tr>
                    <tr>
                        <td>15.4.2
                        </td>
                        <td>6 January 2017
                        </td>
                        <td>Fixed build issues, Added missing package dependencies, Improved error messages.
                        </td></tr>
                    <tr>
                        <td>15.5.0
                        </td>
                        <td>7 April 2017
                        </td>
                        <td>Added react-dom/test-utils, Removed peerDependencies, Fixed issue with Closure Compiler, Added a deprecation warning for React.createClass and React.PropTypes, Fixed Chrome bug.
                        </td></tr>
                    <tr>
                        <td>15.5.4
                        </td>
                        <td>11 April 2017
                        </td>
                        <td>Fix compatibility with Enzyme by exposing batchedUpdates on shallow renderer, Update version of prop-types, Fix react-addons-create-fragment package to include loose-envify transform.
                        </td></tr>
                    <tr>
                        <td>15.6.0
                        </td>
                        <td>13 June 2017
                        </td>
                        <td>Add support for CSS variables in style attribute and Grid style properties, Fix AMD support for addons depending on react, Remove unnecessary dependency, Add a deprecation warning for React.createClass and React.DOM factory helpers.
                        </td></tr>
                    <tr>
                        <td>16.0.0
                        </td>
                        <td>26 September 2017
                        </td>
                        <td>Improved error handling with introduction of "error boundaries", React DOM allows passing non-standard attributes, Minor changes to setState behavior, remove react-with-addons.js build, Add React.createClass as create-react-class, React.PropTypes as prop-types, React.DOM as react-dom-factories, changes to the behavior of scheduling and lifecycle methods.
                        </td></tr>
                    <tr>
                        <td>16.1.0
                        </td>
                        <td>9 November 2017
                        </td>
                        <td>Discontinuing Bower Releases, Fix an accidental extra global variable in the UMD builds, Fix onMouseEnter and onMouseLeave firing, Fix &lt;textarea&gt; placeholder, Remove unused code, Add a missing package.json dependency, Add support for React DevTools.
                        </td></tr>
                    <tr>
                        <td>16.3.0
                        </td>
                        <td>29 March 2018
                        </td>
                        <td>Add a new officially supported context API, Add new packagePrevent an infinite loop when attempting to render portals with SSR, Fix an issue with this.state, Fix an IE/Edge issue.
                        </td></tr>
                    <tr>
                        <td>16.3.1
                        </td>
                        <td>3 April 2018
                        </td>
                        <td>Prefix private API, Fix performance regression and error handling bugs in development mode, Add peer dependency, Fix a false positive warning in IE11 when using Fragment.
                        </td></tr>
                    <tr>
                        <td>16.3.2
                        </td>
                        <td>16 April 2018
                        </td>
                        <td>Fix an IE crash, Fix labels in User Timing measurements, Add a UMD build, Improve performance of unstable_observedBits API with nesting.
                        </td></tr>
                    <tr>
                        <td>16.4.0
                        </td>
                        <td>24 May 2018
                        </td>
                        <td>Add support for Pointer Events specification, Add the ability to specify propTypes, Fix reading context, Fix the <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">getDerivedStateFromProps()</code> support, Fix a testInstance.parent crash, Add React.unstable_Profiler component for measuring performance, Change internal event names.
                        </td></tr>
                    <tr>
                        <td>16.5.0
                        </td>
                        <td>5 September 2018
                        </td>
                        <td>Add support for React DevTools Profiler, Handle errors in more edge cases gracefully, Add react-dom/profiling, Add onAuxClick event for browsers, Add movementX and movementY fields to mouse events, Add tangentialPressure and twist fields to pointer event.
                        </td></tr>
                    <tr>
                        <td>16.6.0
                        </td>
                        <td>23 October 2018
                        </td>
                        <td>Add support for contextType, Support priority levels, continuations, and wrapped callbacks, Improve the fallback mechanism, Fix gray overlay on iOS Safari, Add <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">React.lazy()</code> for code splitting components.
                        </td></tr>
                    <tr>
                        <td>16.7.0
                        </td>
                        <td>20 December 2018
                        </td>
                        <td>Fix performance of React.lazy for lazily-loaded components, Clear fields on unmount to avoid memory leaks, Fix bug with SSR, Fix a performance regression.
                        </td></tr>
                    <tr>
                        <td>16.8.0
                        </td>
                        <td>6 February 2019
                        </td>
                        <td>Add Hooks, Add <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">ReactTestRenderer.act()</code> and <code className="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" dir="ltr">ReactTestUtils.act()</code> for batching updates, Support synchronous thenables passed to React.lazy(), Improve useReducer Hook lazy initialization API.
                        </td></tr>
                    <tr>
                        <td>16.8.6
                        </td>
                        <td>27 March 2019
                        </td>
                        <td>Fix an incorrect bailout in useReducer(), Fix iframe warnings in Safari DevTools, Warn if contextType is set to Context.Consumer instead of Context, Warn if contextType is set to invalid values.
                        </td></tr>
                    <tr>
                        <td>16.9.0
                        </td>
                        <td>9 August 2019
                        </td>
                        <td>Add
                            <span className="monospaced">React.Profiler</span> API for gathering performance measurements programmatically. Remove unstable_ConcurrentMode in favor of unstable_createRoot
                        </td></tr>
                    <tr>
                        <td>16.10.0
                        </td>
                        <td>27 September 2019
                        </td>
                        <td>Fix edge case where a hook update wasn't being memoized. Fix heuristic for determining when to hydrate, so we don't incorrectly hydrate during an update. Clear additional fiber fields during unmount to save memory. Fix bug with required text fields in Firefox. Prefer Object.is instead of inline polyfill, when available. Fix bug when mixing Suspense and error handling.
                        </td></tr>
                    <tr>
                        <td>16.10.1
                        </td>
                        <td>28 September 2019
                        </td>
                        <td>Fix regression in Next.js apps by allowing Suspense mismatch during hydration to silently proceed
                        </td></tr>
                    <tr>
                        <td>16.10.2
                        </td>
                        <td>3 October 2019
                        </td>
                        <td>Fix regression in react-native-web by restoring order of arguments in event plugin extractors
                        </td></tr>
                    <tr>
                        <td>16.11.0
                        </td>
                        <td>22 October 2019
                        </td>
                        <td>Fix mouseenter handlers from firing twice inside nested React containers. Remove unstable_createRoot and unstable_createSyncRoot experimental APIs. (These are available in the Experimental channel as createRoot and createSyncRoot.)
                        </td></tr>
                    <tr>
                        <td>16.12.0
                        </td>
                        <td>14 November 2019
                        </td>
                        <td>React DOM - Fix passive effects (<code>useEffect</code>) not being fired in a multi-root app.
                            <p>React Is - Fix <code>lazy</code> and <code>memo</code> types considered elements instead of components
                            </p>
                        </td></tr>
                    <tr>
                        <td>16.13.0
                        </td>
                        <td>26 February 2020
                        </td>
                        <td>Features added in React Concurrent mode.
                            <p>Fix regressions in React core library and React Dom.
                            </p>
                        </td></tr>
                    <tr>
                        <td>16.13.1
                        </td>
                        <td>19 March 2020
                        </td>
                        <td>Fix bug in legacy mode Suspense.
                            <p>Revert warning for cross-component updates that happen inside class render lifecycles
                            </p>
                        </td></tr>
                    <tr>
                        <td>16.14.0
                        </td>
                        <td>14 October 2020
                        </td>
                        <td>Add support for the new JSX transform.
                        </td></tr>
                    <tr>
                        <td>17.0.0
                        </td>
                        <td>20 October 2020
                        </td>
                        <td>"No New Features" enables gradual React updates from older versions.
                            <p>Add new JSX Transform, Changes to Event Delegation
                            </p>
                        </td></tr>
                    <tr>
                        <td>17.0.1
                        </td>
                        <td>22 October 2020
                        </td>
                        <td>React DOM - Fixes a crash in IE11
                        </td></tr>
                    <tr>
                        <td>17.0.2
                        </td>
                        <td>22 March 2021
                        </td>
                        <td>React DOM - Remove an unused dependency to address the <code>SharedArrayBuffer</code> cross-origin isolation warning.
                        </td></tr>
                    <tr>
                        <td>18.0.0
                        </td>
                        <td>29 March 2022
                        </td>
                        <td>Concurrent React, Automatic batching, New Suspense Features, Transitions, Client and Server Rendering APIs, New Strict Mode Behaviors, New Hooks <sup id="cite_ref-43" className="reference"><a href="#cite_note-43">[43]</a></sup>
                        </td></tr>
                    <tr>
                        <td>18.1.0
                        </td>
                        <td>26 April 2022
                        </td>
                        <td>Many fixes and performance improvements
                        </td></tr>
                    <tr>
                        <td>18.1.2
                        </td>
                        <td>14 June 2022
                        </td>
                        <td>Many more fixes and performance improvements
                        </td></tr></tbody></table>
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-a43b6c1 elementor-widget elementor-widget-post-info" data-id="a43b6c1" data-element_type="widget" data-widget_type="post-info.default">
                    <div className="elementor-widget-container">
                        <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                            <li className="elementor-icon-list-item elementor-repeater-item-fa7f62c elementor-inline-item" itemProp="author">
                                <a href="https://blog.risingstack.com/author/ferenc/">
                                    <span className="elementor-icon-list-icon">
                                        <img className="elementor-avatar entered lazyloaded" src="https://secure.gravatar.com/avatar/5cf608775e4f8cd7adc28b67ec975af9?s=96&amp;d=mm&amp;r=g" alt="Ferenc Hámori" data-lazy-src="https://secure.gravatar.com/avatar/5cf608775e4f8cd7adc28b67ec975af9?s=96&amp;d=mm&amp;r=g" data-ll-status="loaded" />
                                    </span>
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-author">
                                        Ferenc Hámori					</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="elementor-element elementor-element-a45b3e1 elementor-widget elementor-widget-theme-post-content" data-id="a45b3e1" data-element_type="widget" data-widget_type="theme-post-content.default">
                    <div className="elementor-widget-container">

                        <p></p>



                        <p>The appearance of React.js dramatically widened the opportunities for front-end developers in creating user-friendly interfaces.</p>



                        <p>To show its unique features, we’ve been publishing a lot about React.js. Moreover, our excellent front-end expert, Miklos Bertalan has started a&nbsp;<a href="https://blog.risingstack.com/building-react-app-from-scratch-live-stream/">series of live streams</a>&nbsp;where he shows how to build React apps on a&nbsp;<a href="https://blog.risingstack.com/free-local-api-server-nodejs/">free, locally hosted server</a>&nbsp;– created by another brilliant engineer at Risingstack, Robert Czinege.</p>



                        <p>To have a better understanding of React, lets have a sneak peek at how everything started. I have collected the most significant milestones in the history of React, which youll be able to see in this timeline below.</p>



                        <h2 id="theneedforabettercode">The need for a better code</h2>



                        <p>Back in 2011, the developers at Facebook started to face some issues with code maintenance. As the Facebook Ads app got an increasing number of features, the team needed more people to keep it running flawlessly. The growing number of team-members and app-features slowed them down as a company. Over time, their app became difficult to handle, as they faced a lot of cascading updates.</p>



                        <p>After a while, engineers at Facebook couldnt keep up with these cascading updates. Their code demanded an urgent upgrade to become more efficient.</p>



                        <p>They had the model right, but they needed to do something about user experience. So, Jordan Walke built a prototype that made the process more efficient, and this marks the birth of React.js.<br />(<a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4&amp;t=0s&amp;list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&amp;index=1">source</a>)</p>



                        <h2 id="letslookatthehistoryofreactjsonatimeline">Let’s look at the history of React.js on a timeline</h2>



                        <p>From 2010 until now (March 2018):</p>







                        <p><em>We got a feedback that certain dates were incorrect in our timeline: React was open sourced in May, during the JS ConfUS 2013, and React London 2014 was held on April 7-9. Now, we have updated our timeline. Please, if you find any other inaccuracies, do let us know in the comment section below or on Twitter.</em></p>



                        <h2 id="2010thefirstsignsofreact">2010 – The first signs of React</h2>



                        <ul><li><a href="https://www.facebook.com/notes/facebook-engineering/xhp-a-new-way-to-write-php/294003943919/">Facebook introduced xhp into its php stack</a>&nbsp;and open sourced it.<br />Xhp allowed creating composite components. They introduced this syntax later in React.</li></ul>



                        <h2 id="2011anearlyprototypeofreact">2011 – An early prototype of React</h2>



                        <ul><li>Jordan Walke created&nbsp;<a href="https://github.com/jordwalke/FaxJs">FaxJS</a>, the early prototype of React – shipped a search element on Facebook.</li></ul>



                        <h2 id="2012somethingnewhadstartedatfacebook">2012 – Something new had started at Facebook</h2>



                        <ul><li>Facebook Ads became hard to manage, so Facebook needed to come up with a good solution for it. Jordan Walke worked on the prototype and created React.</li><li>April 9:&nbsp;<a href="http://money.cnn.com/2012/04/09/technology/facebook_acquires_instagram/index.htm">Instagram was acquired by Facebook.</a><br />Instagram wanted to adopt Facebook’s new technology. By this, Facebook had a pressure to decouple React from Facebook and make it open-sourceable. Most of this was done by Pete Hunt.</li><li>Sept 8-12:&nbsp;<a href="https://techcrunch.com/2012/09/11/mark-zuckerberg-our-biggest-mistake-with-mobile-was-betting-too-much-on-html5/">TechCrunch Disrupt San Francisco</a>, Mark Zuckerberg: “Our Biggest Mistake Was Betting Too Much On HTML5”. He promised that Facebook would deliver better mobile experiences very soon.</li></ul>



                        <h2 id="2013theyearofthebiglaunch">2013 – The year of the Big Launch</h2>



                        <ul><li>May 29-31: JS ConfUS.&nbsp;<a href="https://www.youtube.com/watch?v=GW0rj4sNH2w">Jordan Walke introduced React</a>.&nbsp;<strong>React gets open sourced</strong>.&nbsp;<em>Fun Fact: The audience was skeptical. Most people thought React was a huge step backward. This happened as mostly ‘early adopters’ attended this conference, however, React targeted ‘innovators.’ The creators of React realized this mistake on time, and decided to start a ‘React tour’ later on to turn haters into advocates.</em></li><li>June 2: React (by Facebook)&nbsp;<a href="https://twitter.com/jsfiddle/status/341114115781177344?ref_src=twsrc%5Etfw&amp;ref_url=https%3A%2F%2Freactjs.org%2Fblog%2F2013%2F06%2F02%2Fjsfiddle-integration.html">is available on JSFiddle</a></li><li>July 30:&nbsp;<a href="https://reactjs.org/blog/2013/07/30/use-react-and-jsx-in-ruby-on-rails.html">React and JSX in available in Ruby on Rails</a></li><li>August 19:&nbsp;<a href="https://reactjs.org/blog/2013/08/19/use-react-and-jsx-in-python-applications.html">React and JSX available in Python Applications</a></li><li>Sept 14-15: JSConfEU 2013. Pete Hunt’s speech of&nbsp;<a href="https://www.youtube.com/watch?v=x7cQ3mrcKaY">rethinking best practices</a>.</li><li>Dec 17: David Nolen&nbsp;<a href="http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs">Introduces OM, based on React</a>. Explains how React is awesome – which reached early adopters. This article showed how React is better than the other alternatives out there, which boosted the acknowledgement of React.</li></ul>



                        <h2 id="2014theyearofexpansion">2014 – The year of Expansion</h2>



                        <p>React had gradually gained its reputation and started to go through to ‘early majority’ of its potential users. At this point, they needed a new message instead of solely relying on its technical benefits, and it is: how is React stable? By focusing on this, they aimed to appeal to enterprises, like Netflix.</p>



                        <ul><li>Early 2014: #reactjsworldtour conferences started, to build community and to ‘turn haters into advocates’.</li><li>Jan 2:&nbsp;<a href="https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html">React Developer Tools</a>&nbsp;becomes an extension of the Chrome Developer Tools.</li><li>February: Atom was introduced – A hackable text editor for the 21st Century</li><li>April 7-9:&nbsp;<a href="http://reactconf.org/2014/london/">React London 2014</a></li><li>June:&nbsp;<a href="http://reactivex.io/intro.html">ReactiveX.io</a>&nbsp;emerged.</li><li>July 13: The Release of&nbsp;<a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a>. React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state.</li><li>Dec 12:&nbsp;<a href="https://github.com/facebookarchive/planout">PlanOut</a>: A language for online experiments. The release of PlanOut 0.5, which includes a React-based PlanOut language editor, and brings the interpreter into feature-parity with the latest version of PlanOut used internally at Facebook.</li></ul>



                        <h2 id="2015reactisstable">2015 – React is Stable</h2>



                        <ul><li>Early 2015: Flipboard releases&nbsp;<a href="https://github.com/Flipboard/react-canvas">React Canvas</a>.</li><li>January:&nbsp;<a href="https://medium.com/netflix-techblog/netflix-likes-react-509675426db">Netflix likes React</a></li><li>Early 2015: Airbnb uses React</li><li>January 28-29: React.js Conf 2015 – Facebook released the&nbsp;<a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4&amp;t=0s&amp;list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&amp;index=1">first version of React Native&nbsp;</a>for the React.js Conf 2015 during a technical talk.</li><li>February:&nbsp;<a href="https://reactjs.org/blog/2015/02/20/introducing-relay-and-graphql.html">Introducing Relay and GraphQL</a>&nbsp;at React.js Conf.</li><li>March 25: Facebook announced that&nbsp;<a href="https://code.facebook.com/posts/754869551286944/f8-big-technology-bets-and-open-source-announcements/">React Native for iOS is open and available on GitHub</a>.</li><li>June 2: Redux was released by Dan Abramov and Andrew Clark.</li><li>Sept 2: The first stable version of the new&nbsp;<a href="https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html">React Developer Tools</a>&nbsp;launched.</li><li>Sept 14:&nbsp;<a href="https://code.facebook.com/posts/1189117404435352/">React Native for Android</a>&nbsp;was released.</li></ul>



                        <h2 id="2016reactgetsmainstream">2016 – React gets mainstream</h2>



                        <ul><li>March: The introduction of&nbsp;<a href="https://mobx.js.org/index.html">Mobx</a></li><li>February 22-23:&nbsp;<a href="https://www.youtube.com/watch?v=MGuKhcnrqGA&amp;list=PLb0IAmt7-GS0M8Q95RIc2lOM6nc77q1IY&amp;t=0s&amp;index=1">React.js Conf 2016</a>, San Francisco</li><li><a href="https://www.youtube.com/watch?time_continue=3&amp;v=feUYwoLhE_4">Draft.js was introduced</a>&nbsp;at React.js Conf by Isaac Salier-Hellendag</li><li>March: The introduction of&nbsp;<a href="https://storybook.js.org/">React Storybook</a></li><li>June 2-3:&nbsp;<a href="https://2016.react-europe.org/">ReactEurope 2016</a></li><li>July 11: Introducing React’s&nbsp;<a href="https://reactjs.org/blog/2016/07/11/introducing-reacts-error-code-system.html">Error Code System</a>.</li><li>November: the introduction of&nbsp;<a href="http://blueprintjs.com/">Blueprint</a>&nbsp;– A React UI toolkit for the web</li></ul>



                        <h2 id="2017theyearoffurtherimprovements">2017 – The year of further improvements</h2>



                        <ul><li>Early 2017: Airbnb introduces their new open source library&nbsp;<a href="https://airbnb.design/painting-with-code/">React Sketch.app</a></li><li>Apr 19:&nbsp;<a href="https://code.facebook.com/posts/1005990452878946/facebook-open-source-at-f8-2017/">React Fiber</a>&nbsp;gets open sourced at F8 2017.</li><li>Sept:&nbsp;<a href="https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/">Relicensing React, Jest, Flow, and Immutable.js</a></li><li>Sept 26:&nbsp;<a href="https://reactjs.org/blog/2017/09/26/react-v16.0.html">React 16: error boundaries, portals, fragments and the Fiber architecture</a></li><li>October:&nbsp;<a href="https://twitter.com/NetflixUIE/status/923374215041912833">Netflix removes client-side React.js</a></li><li>November 28: React v16.2.0:&nbsp;<a href="https://github.com/facebook/react/releases/tag/v16.2.0">Improved Support for Fragments</a></li></ul>



                        <h2 id="2018whatsupwithreactnow">2018 – What’s up with React now?</h2>



                        <ul><li>March 1-2:&nbsp;<a href="https://2018.jsconf.is/">JSConf Iceland</a>&nbsp;–&nbsp;<a href="https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html">Beyond React 16 by Dan Abramov</a></li><li>2018 March 29:&nbsp;<a href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html">React 16.3.0</a>&nbsp;was released.</li></ul>



                        <h3 id="whatsnext">What’s next?</h3>



                        <p>This journey has been fun so far, but there is certainly a lot more to learn about React. With this in mind, we decided to host a&nbsp;<a href="https://ti.to/risingstack/modern-front-end-with-react-warsaw-2018">React Training in Warsaw, on June 21-22</a>. If you are considering to deepen your React knowledge, don’t hesitate to join us there.</p>



                        <p>Did I miss anything from the list? Or did you find any inaccuracies? Leave a comment below or find us on Twitter and let us know.</p>



                        <p>
                        </p></div>
                </div>

            </div>
        </>
    );
};

export default IntroFunctionalCompo;