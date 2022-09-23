// https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// // import $ from 'jquery';
// // import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import { Button} from 'react-bootstrap';
// // import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Map from './Map';
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
/* App.jsx */
// import React, { Component } from 'react';

class ThemeSwitcher extends React.Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      
        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>
        
        <div className="btn-group">
        
          <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>
          
          <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>
          
          <div className="dropdown-menu">
          
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
            <a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>
            
            <div className="dropdown-divider"></div>
            
            <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
          </div>
          
        </div>
        
      </div>
    );
    
  }
  
}
export default ThemeSwitcher;