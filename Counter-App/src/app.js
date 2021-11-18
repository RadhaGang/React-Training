import React from 'react';
import './app.css';
import SiteHeader from './component/siteheader';
import Status from './component/status';
import PlayBlock from './component/playblock';
import ResetButton from './component/resetbutton';
//import Square from './component/square';
import Board from './component/Board';
//import header from './component/site-title';
//import {Abc} from './component/Board';



export default class App extends React.Component{

    render(){
        return(
                  
            <div className="container">
                <SiteHeader/>
                <div className="Game">
        
                    <div className="PlayBox">
                        <Board/>
                    </div>
                   <ResetButton/>
                </div>
            </div>

        );

    }
}

