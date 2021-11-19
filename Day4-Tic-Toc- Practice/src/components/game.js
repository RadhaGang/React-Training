import React from 'react';
import Board from './board';
import StatusMessage from './status';
import ResetButton from './reset-button';
import {checkGame} from '../services/tick-tac-toe';
import Cell from './cell';
import Winner from './winners';
class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state= this.getInitState();
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
           
        };
    }

    handleCellClick=(id)=>{
        console.log("cell",id, "clicked");
        
        let cells= [...this.state.cells]; //create a new array with existing values
        
        if(cells[id]!==null)
            return;
        
        cells[id]=this.state.next;
        let result= checkGame(cells);
        let message="";
        let message1="";
        let doubled;
        message1=result.winner;
        const next= this.state.next==="O" ? "X" : "O";
        const moves=this.state.moves+1;
        

        if(result.winner){
            message=`${result.winner} Wins`;

         } 
         else if(result.gameOver){
                message=`Game ends Stalemate`;
            } 
        //  if(typeof message1==='string'){
        //         console.log("yes");
        //         message=`Game ends Stalemate`;}
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

//end
      
        this.setState({cells:cells});
        this.setState({next,message,moves});
        }
    
    handleReset=()=>{
        this.setState(this.getInitState());
    }

    render=()=>{
        
        return (
            <div className="game">
                <StatusMessage message={this.state.message}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick}/>
                <Winner cells={this.state.cells}/>
                
                <ResetButton visible={this.state.moves>0 } onReset={this.handleReset} caption="Reset"/>
                
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


