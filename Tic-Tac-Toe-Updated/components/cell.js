import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import reactDom from 'react-dom';


const Cell = function (props) {

    const label = props.value || "_";
    console.log(label);

    const style = {
        color: props.value ? "black" : "transparent",
        cursor: props.value ? "not-allowed" : "pointer",
        background:'yellow'
    }

    const style1 = {
        color: props.value ? "black" : "transparent",
        cursor: props.value ? "not-allowed" : "pointer",
        background:'green'
                    }
  
    console.log("welcome to the cell class, status is : "+props.status);
    console.log("winning combo is : "+props.winningCombo);
    console.log("winning combo is : "+props.id);

    let winCombo="";
    winCombo=props.winningCombo;
    let i="";
    i=props.id;
    let WinComboNew;

    console.log("cell check"+props.status)

    console.log("check 5...",props.winningCombo)
    if ((props.winningCombo))
    {
               WinComboNew=props.winningCombo;
               console.log("Radha check 5...");//,winCombo[0],winCombo[1],winCombo[2]);
    }

    console.log(props.winningCombo);

    if(!props.winningCombo)
    {
        console.log("first");
        return (<button  style={style1} onClick={() => props.onMove(props.id)}
            className='cell'>
            {label}
            </button>)
    
    }

let str="";
str=props.winningCombo;
let strId="";
strId=props.id;
if (props.winningCombo && ((props.winningCombo.includes(strId))) )//|| (props.winningCombo[1]===props.id) || (props.winningCombo[2]===props.id)))
{
      console.log("second");
             return (<button  style={style} className='cell'>
                        {label}
                        </button>)
}
                    
else
{
   console.log("last check ",props.winningCombo[0],props.id);
            console.log("third");
            return (<button  style={style1} disabled='true' onClick={() => props.onMove(props.id)}
            className='cell'>
            {label}
            </button>)
       
}

}
export default Cell;

