import React from 'react';
import Cell from './cell';
import MovesBoard from './movesboard';

const MoveLabels = (props)=>{
  
        return (
           
            <div className="board">
           
                    <MovesBoard id={0} value={props.cells[0]} onMove={props.onCellClick} number={props.number} player={props.player} position={props.position}/>
                    <MovesBoard id={1} value={props.cells[1]} onMove={props.onCellClick} number={props.number} player={props.player} position={props.position}/>
                  
                </div>             
                 
            );
};
export default MoveLabels;

