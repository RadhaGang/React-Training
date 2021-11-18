import React from 'react';

function Square(props) {
    return (
        <div>
            <button className="block" onClick={() => props.onClick()}>{props.value}</button>
        </div>
    )
}

export default Square;