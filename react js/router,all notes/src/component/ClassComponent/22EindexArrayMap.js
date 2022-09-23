// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();






import React from 'react'; 
import ReactDOM from 'react-dom'; 

// Navbar Component 
function Navbar(props) 
{ 
    // return <h1>This is Header.</h1>   
	const list = props.menuitems; 
    console.log(list);   
    // const numbers = [1, 2, 3, 4, 5];
    // const doubled = numbers.map((number) => number * 2);
    // console.log(doubled);
    const updatedList = list.map((listItems)=>{ 
        return( 
                <li key={listItems.toString()}> 
                    {listItems} 
                </li> 
            );  
    });   
    // console.log(updatedList);
    return( 
        <ul>{updatedList}</ul> 
    ); 
} 
const menuItems = [1,2,"home",4,5]; 
// Sidebar Component 
function Sidebar() { 
	return <h1>This is Sidebar.</h1> 
} 


// Article list Component 
function Form() 
{ 
    return ( 
        <div> 
            <input type = "text" placeholder = "Enter Text.." /> 
            <br /> 
            <br /> 
            <input type = "text" placeholder = "Enter Text.." /> 
            <br /> 
            <br /> 
            <button type = "submit">Submit</button> 
        </div> 
    ); 
} 

function ArticleList() 
{ 
	return <h1>This is Articles List.</h1> 
} 

// App Component 
 function App() 
{ 
	return( 
			<div> 
				<Navbar menuitems = {menuItems} />
				<Sidebar /> 
				{/* <Form />  */}
				<ArticleList /> 
			</div> 
		); 
} 
export default App;
// ReactDOM.render( 
// 	<App />, 
// 	document.getElementById("root") 
// ); 