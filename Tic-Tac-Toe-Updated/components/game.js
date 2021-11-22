import React from 'react';
import Board from './board';
import StatusMessage from './status';
import ResetButton from './reset-button';
import {checkGame} from '../services/tick-tac-toe';
import Cell from './cell';
import Timer from './timer';
import MovesBoard from '../components/movesboard';

class Game extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = this.getInitState();
        this.state.TotalGame=0;
        this.state.OWins=0;
        this.state.XWins=0;
        this.state.Stalemate=0;
     
        //this.getInitState = this.getInitState.bind(this);
    }

    getInitState=()=>{
        return {
            next: "O",
            cells:[
                null, null, null,
                null, null, null, 
                null, null, null
            ],
            message:"Next Move 'O'",
            moves:0,
            renderCount:0,
            idValue:"",
            message1:"",
            arrData:[],
            Number:0,
   
        };
    }

   
    handleCellClick=(id)=>{
        console.log("cell",id, "clicked");

        let TotalGame = this.state.TotalGame;
        let OWins = this.state.OWins;
        let XWins = this.state.XWins;
        let Stalemate = this.state.Stalemate;
        
        let cells= [...this.state.cells]; //create a new array with existing values
        
        if(cells[id]!==null)
            return;
        
        cells[id]=this.state.next;
        let result= checkGame(cells);
        let message="";
        let message1="";
        let doubled;
        this.state.message1=result.winner;
        this.state.idValue=id;
        const next= this.state.next==="O" ? "X" : "O";
        const moves=this.state.moves+1;
    
        let playerNew="";
        playerNew=result.winner;
        if(result.winner){
            message=`${result.winner} Wins`;

             if (playerNew.includes("X"))
            {
                //this.state.XWins=this.state.XWins+1;
                XWins=XWins+ 1;
                TotalGame =TotalGame+ 1;
            }
            else
            {
                OWins=OWins+ 1;
                TotalGame =TotalGame+ 1;
                //this.state.OWins=this.state.OWins+1;
            }

             } 
         else if(result.gameOver){
                message=`Game ends Stalemate`;
                Stalemate += 1;
                TotalGame =TotalGame+ 1;
             
            } 
         else
         {   
            message= `Moves: ${moves}, Next: '${next}'`;
            
        }

//start

        if (result.winner)
        {
            doubled = result.winningCombo.map((number) => number);
            console.log("hii"+doubled);
            //idex  1,2,3
        }

        this.setState({Number:this.state.Number+1})
      
        this.state.arrData.push({Number:this.state.Number+1,
                         Player:this.state.next,
                         Position:id+1})
        this.setState({arrData:this.state.arrData});

//end

        this.setState({cells:cells});
        this.setState({next,message,moves,result,TotalGame,OWins,XWins,Stalemate});

        console.log("game move board check",this.state.next);

        let player="";
        player=this.state.next;
        
        }
    
    handleReset=()=>{
        this.setState(this.getInitState());
    }

    render=()=>{
        
        return (
            <div className="game">
                 <div className="clocks">
                    <Timer  running={this.state.next==="O"} label="O" manualControls={true} value={this.state.message1}/>
                    <Timer  running={this.state.next==="X"} label="X" manualControls={true}  value={this.state.message1}/>     
                </div>
                <StatusMessage message={this.state.message}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
             
                <ResetButton visible={this.state.moves>0 } onReset={this.handleReset} caption="Reset"/>
               
                <MovesBoard movesBoard={this.state.arrData}/>

                {<h3><label >Games:{this.state.TotalGame}</label> <label>OWin:{this.state.OWins}</label> <label>XWin:{this.state.XWins}</label>  <label>Stalemate:{this.state.Stalemate}</label></h3>} 

            </div>

            );
    }

}

const _Game = (props)=>{

    return (
        <div className="game">
            <StatusMessage/>
            <Board/>
            <button className='reset-button'>Reset</button>
        </div>
        );
};
    
export default Game;
