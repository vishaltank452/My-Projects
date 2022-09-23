import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
/* App.jsx */

class App extends React.Component {
   constructor() {
      super();
    
      this.state = {
         data:[
            {
               component: 'First...',
               id: 1,
               test:23,
               ab:'something'
            },
            {
               component: 'Second...',
               id: 2,
               test:435,
               ab:'something for second'
            },
            {
               component: 'Third...',
               id: 3,
               test:567,
               ab:'something for Third'
            },
            {
               component: '123...',
               id:123,
               test:87,
               ab:'something for 123'
            }
         ]
      }
      // console.log(this.state.data);
   }
   render() {
      return (
         <div>
            <div>
              {this.state.data.map((value, key) =>
                // console.log(value.test)
                <div>
                  <div>{key}{value.test}</div>
                  <div>{key}{value.component}</div>
                  <div>{key}{value.id}</div>
                  <div>{key}{value.ab}</div>
               </div>
              )}
               {this.state.data.map((value, Key) => <Content 
                   key = {Key} componentData = {value} />)}
            </div>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.test}</div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
            <div>{this.props.componentData.ab}</div>
         </div>
      );
   }
}

export default App;