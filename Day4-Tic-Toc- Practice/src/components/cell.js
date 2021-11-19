import React,{useState} from 'react';

const Cell = function (props) {

    const label = props.value || "_";
    console.log(label);
    const style = {
        color: props.value ? "black" : "transparent",
        cursor: props.value ? "not-allowed" : "pointer",
        
 
    }

  let a='false';
    // //let msg="";
    // //msg=props.status;
   
    console.log("cell check"+props.status)
    if (props.status)
      {
          console.log("cell .. check"+props.status)
          a='disabled';

    return <button  style={style} disabled='false' onClick={() => props.onMove(props.id)}
        className='cell'>
        {label}
    </button>
    }
    else
    {
        return <button  style={style} onClick={() => props.onMove(props.id)}
        className='cell'>
        {label}
    </button>
    }

    }




export default Cell;

// return <button  style={style} onClick={() => props.onMove(props.id)}
// className='cell'>
// {label}
// </button>;