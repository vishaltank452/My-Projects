import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import MyFirstFile from './component/01myfirstfile.jsx'
// import MainHdr from './mainheader.jsx'
import MainRouter from './MainRouter.jsx'
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BrowserRouter><MainRouter/></BrowserRouter>);



