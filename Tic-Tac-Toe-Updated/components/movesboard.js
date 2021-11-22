import React from 'react';

const MovesBoard = function(props) {
    return(
        <div><table><tbody>
                <tr className="MainTr">
                    <td className="TRMoveBoard">Number</td><td className="TRMoveBoard">Player</td><td className="TRMoveBoard">Position</td>
                </tr>
                 {props.movesBoard.map( r =>
                        <tr><td className="TRMoveBoard">{r.Number}</td>
                            <td className="TRMoveBoard">{r.Player}</td>
                            <td className="TRMoveBoard">{r.Position}</td></tr>
                    )}
 
            </tbody> </table> </div>
    );
}

export default MovesBoard;