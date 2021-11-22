import React from 'react';
import Cell from './cell';
import {checkGame} from '../services/tick-tac-toe';

const style = {
    background:'green',    

}

const Board = ({cells,onCellClick})=>{
    let message1="";
    let result= checkGame(cells);
    message1=result.winner;
    console.log("hii board"+result.winningCombo);

     if( typeof message1==='string'){
                  console.log("done from board");
     }
 
        return (
           
            <div className="board">

                    <Cell id={0} value={cells[0]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                    <Cell id={1} value={cells[1]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                    <Cell id={2} value={cells[2]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                
                    <Cell id={3} value={cells[3]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                    <Cell id={4} value={cells[4]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                    <Cell id={5} value={cells[5]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                
                    <Cell id={6} value={cells[6]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                    <Cell id={7} value={cells[7]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>
                    <Cell id={8} value={cells[8]} onMove={onCellClick} status={message1} winningCombo={result.winningCombo}/>

            </div>
                             // cells.map( (cell,id) => (<Cell key={id} id={id} value={cells[id]} onMove={onCellClick} />
                            // ))
                                                    
                         
                                      
                 
            );
};


const BoardV3 = ({cells,onCellClick})=>{

    return (
            <div className="board">
                <Cell id={0} value={cells[0]} onMove={onCellClick}/>
                <Cell id={1} value={cells[1]} onMove={onCellClick}/>
                <Cell id={2} value={cells[2]} onMove={onCellClick}/>
                <Cell id={3} value={cells[3]} onMove={onCellClick}/>
                <Cell id={4} value={cells[4]} onMove={onCellClick}/>
                <Cell id={5} value={cells[5]} onMove={onCellClick}/>
                <Cell id={6} value={cells[6]} onMove={onCellClick}/>
                <Cell id={7} value={cells[7]} onMove={onCellClick}/>
                <Cell id={8} value={cells[8]} onMove={onCellClick}/>
            </div>
        );
};


export default Board;

