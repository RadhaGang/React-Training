import React,{ useState } from 'react';
import Cell from './cell';
import {checkGame} from '../services/tick-tac-toe';
import Cell1 from './cell1';


const Winner = ({cells})=>{

    const [cellss, setCellss] = useState(null);

   let message1="";
   console.log("board check");

    let result= checkGame(cells);
    console.log("hii"+result.winningCombo);

   message1=result.winner;
  // console.log("hii"+result.winner);

    if( typeof message1==='string'){
     
        console.log("check2"+message1);
        console.log(cells);
   
        return(
            <div>  
                 {
                            <div className="board">
                               
                                     
                            </div>
                    
                   
                 }
            </div>
            
              //console.log(result.winningCombo[0]);setCellss(cells[0].) }
              // <Cell1 id={0} style={{backgroundColor:'green'}} />
        );

        }
return(<div>
            
            

</div>);
    /*
    if (message1.includes('Wins'))
    {
 return <button style={{backgroundColor:'green'}}> </button>;
        console.log("we are at right place");
    
    }
*/
 
      
};



export default Winner;


/*
for (let winningCombo of props.values) {

    console.log("winner"+ winningCombo);

    console.log("props"+props.res[winningCombo]);
    //<Cell props.res={winningCombo} />
}
  

/*

  props.res[values]
    <button  onClick={() => props.onMove(props.id)}
    className='cellWin'>
     </button>;
   let [first, second, third] = winningCombo;
    if(cells[values] && cells[first]===cells[second] && cells[first]===cells[third]){
        result.winner=cells[first];
        result.winningCombo=winningCombo;
        result.gameOver=true;
        return result;*/



