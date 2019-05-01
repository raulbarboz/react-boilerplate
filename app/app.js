import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
require('./style.css');

class App extends React.Component{
    render(){
        return(
            <div>
                <p>APP</p>
                <Navbar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
