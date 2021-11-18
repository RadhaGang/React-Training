import React from 'react';
import Square from './square';

const renderSquare = (i) => {
  return (
      <Square value={i} />
  )
}

const PlayBlock = function(prop){
    console.log(prop);
    return(
       // <div style={styles.header}>
       
        <div className="play-area">
 
    <div id="block_0" className="block"><button className="block">Xy</button></div>
    <div id="block_1" className="block"><button className="block">X</button></div>
    <div id="block_2" className="block"><button className="block">X</button></div>
    <div id="block_3" className="block"><button className="block">X</button></div>
    <div id="block_4" className="block"><button className="block">X</button></div>
    <div id="block_5" className="block"><button className="block">X</button></div>
    <div id="block_6" className="block"><button className="block">X</button></div>
    <div id="block_7" className="block"><button className="block">X</button></div>
    <div id="block_8" className="block"><button className="block">X</button></div>
  </div>
    );

};

export default PlayBlock;















//<div id="block_0" className="block">{renderSquare(0)}</div>