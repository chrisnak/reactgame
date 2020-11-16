import React from "react";
import { Link } from "react-router-dom";
import { Component} from "react";
import Pdf from '../files/guide.pdf';

class MainPage extends Component {

    // --------------------------------Constructor-------------------------
    constructor (props){
        super(props);
        this.state = {value:""};
    };
    // --------------------------------Constructor-------------------------
    //triger with enter key
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          
        }
      }
    // Funcion to set the initial values into localstorage
    setUsername() {
        var username = document.getElementById("username");
        localStorage.setItem('username', username.value);
        localStorage.setItem('balance', 100);
        localStorage.setItem('round', 0);
        localStorage.setItem('pool', 0);
    }
    //---------------------------------Render-------------------------------
    render(){   
        
        return (
            
            <div>           
                <div className="App">
                    <header className="App-home">
                        <h1> Welcome to Guess Stars Online{this.state.value}</h1>
                        
                        <p>Enter Your Nickname: </p>
                        
                        <input onKeyDown={this._handleKeyDown} type="text" id="username"/> 
                        
                        <button onClick={() => this.setUsername()}>
                            <Link to="/game" > Let's play</Link>
                        </button>

                        <a className="guide" href = {Pdf} target ="_blank" > Guide!</a>
                    </header>
                </div>
            </div>
        );
    };
    //---------------------------------Render-------------------------------
};

export default MainPage;

