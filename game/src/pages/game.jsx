import React from "react";
import { Link } from "react-router-dom";
import Card from "react-playing-card";
import ReactCardFlip from 'react-card-flip';

class GamePage extends React.Component{

  // ----------------------Class Constructor-----------------------------------
  // Constructs the class and sets the initial states
  constructor (){
    super()
    this.state = {
      show:true,
      gameUi:false,
      cards:true,
      isFlipped1:false,
      isFlipped2:false,
      isFlipped3:false,
      isFlipped4:false
    }; 
  this.handleClick = this.handleClick.bind(this);
  // this.cards = this.cards.bind(this);
  
  
  }
  // ----------------------Class Constructor-----------------------------------
  
  //function to handle the clicks on the cards
  handleClick(e){
    var Wpool = localStorage.getItem('pool');
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped1: !prevState.isFlipped1,
      isFlipped2: !prevState.isFlipped2,
      isFlipped3: !prevState.isFlipped3,
      isFlipped4: !prevState.isFlipped4,
    }));
    if (this.state.isFlipped1){
      alert("You Won!");
      var round = localStorage.getItem('round');
      var earnings = round * 10;
      localStorage.setItem("pool", earnings);
      window.location.reload(false);
    } else if (this.state.isFlipped1){
      alert("You Won!");
      var round = localStorage.getItem('round');
      var earnings = round * 5;
      localStorage.setItem("pool", earnings);
      window.location.reload(false);
    }else if (this.state.isFlipped1){
      alert("You Won!");
      var round = localStorage.getItem('round');
      var earnings = round * 2;
      localStorage.setItem("pool", earnings);
      window.location.reload(false);
    }else if(this.state.isFlipped4){
      alert("You Lose!");
      localStorage.setItem("pool", 0);
      window.location.reload(false);
    }
  }

  // }

  // -------------------------------Decissison Changes-------------------------------- 
  
  // 2 Basic operation function to allow the user enter the game depending on his balance
  operation(){
    var curBalance = localStorage.getItem("balance");
    var curRound = localStorage.getItem("round");
    if (curBalance < 10 ){
      alert("You don't have enough money to Play");
    }else{
      localStorage.setItem("balance",(curBalance - 10));
      localStorage.setItem("round", curRound + 1);
      this.setState({
        show:!this.state.show,
        gameUi:!this.state.gameUi,
      })
    }
  }

  // -------------------------------Decissison Changes--------------------------------
  
  // -------------------------------Game Loop--------------------------------
  
  // Show the cards
  draw(){
    // var curRound = localStorage.getItem("round");
    // localStorage.setItem("round", curRound + 1);
    // this.setState({
    //   cards:!this.state.cards
    // });
   
    
  }
  //Forfeit and add winning pool to player's balance
  forfeit(){
    //add winning pool
    var wPool = localStorage.getItem('pool');
    localStorage.setItem('pool', wPool);
    //restart ui
    this.setState(prevState => ({show:!this.state.show}));
  }
  game(){
    // if (this.state.isFlipped1)
  }

  // -------------------------------Game Loop--------------------------------

  render() {
    return (
      
      <div className="App-decission"> 
        <h2 className="game-title">Quess Stars Online</h2>
        {/* -----------------------------Decession--------------------------------- */}
          {
            this.state.show?
            <div> Hello {localStorage.getItem("username")}! Your current balance is {localStorage.getItem("balance")} $. 
              <br/> <a>Do you want to play?</a>
              <div>
                <button className="button-start" onClick ={() => this.operation()}> 
                    Start 
                </button>
                <button className="button-logout">
                    {localStorage.setItem("round", 0)}
                    <Link to="/"> Logout </Link>
                </button>
              </div>
            </div> 
            :null  
          }
        {/* -----------------------------Decission--------------------------------- */}
        
        {/* -----------------------------Game UI--------------------------------- */}
          {
            this.state.gameUi?

            <div className="Player-info">
              
              {/* ---------------------Player's Info---------------------------- */}
              <div className="account-info">

                <div>Profile</div>
                
                <div> Player: {localStorage.getItem("username")}</div>
                
                <div> Current Balance: {localStorage.getItem("balance")} $</div>
              
              </div>
              {/* ------------------------------------------------- */}

              {/* ----------------------Round Info--------------------------- */}
              <div className="end-session">
                <a ><Link to="/"> Logout </Link></a>
              </div>
              <div class="inline-div "className="round-info"> 
               
                <div> Winning pool: {localStorage.getItem('pool')} </div>
               
                <div> Current Round: {localStorage.getItem("round") } </div>
             
              </div>

              <div> 
                <div>
                  <a> Draw Cards or Forfeit?</a>
                  <div className="flexbox-container">
                    <button onClick={this.draw}> Draw </button>
                    <button onClick={this.forfeit}> Forfeit</button>
                  </div>
                </div>
              </div>
            </div>
            :null
          }
              {/* ------------------------------------------------- */}

              {/* -----------------------Card Flip-------------------------- */}
           {
             this.state.cards?
            <div>
              <div className="flexbox-container">
                <ReactCardFlip isFlipped ={this.state.isFlipped1} flipDirections="horizontal">
                    <div>
                      <a onClick={this.handleClick}><Card rank="0" suit="" /> </a>
                    </div>
                    <div>
                    <a> <Card rank="T" suit="S" /> </a>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped ={this.state.isFlipped2} flipDirections="vertical">
                    <div>
                      <a onClick={this.handleClick}><Card rank="0" suit="" /> </a>
                    </div>
                    <div>
                    <a > <Card rank="5" suit="S" /> </a>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped3 ={this.state.isFlipped3} flipDirections="vertical">
                    <div>
                      <a onClick={this.handleClick}><Card color="black" rank="0" suit="" /> </a>
                    </div>
                    <div>
                    <a> <Card rank="2" suit="S" /> </a>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped4 ={this.state.isFlipped4} flipDirections="vertical">
                    <div>
                      <a onClick={this.handleClick}><Card rank="0" suit="" /> </a>
                    </div>
                    <div>
                    <a> <Card rank="J" suit="S" /> </a>
                    </div>
                </ReactCardFlip>
              </div>
              {/* ------------------------------------------------- */}
              <div></div>
              <div></div>
              
            </div> 
            :null
          }
        {/* -----------------------------Game UI--------------------------------- */}
      </div>
    )
  }
}

export default GamePage;
//{UserStore.username}