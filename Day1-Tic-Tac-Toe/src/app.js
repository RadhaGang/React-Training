import React from 'react';
import './app.css';
import SiteHeader from './component/siteheader';
import Status from './component/status';
import PlayBlock from './component/playblock';
import ResetButton from './component/resetbutton';
import Square from './component/square';
//import header from './component/site-title';


export default class App extends React.Component{

    render(){
        return(
            
        
            <div className="container">
                <SiteHeader/>
                <div className="Game">
                    <Status/>
                    <div className="PlayBox">
                        <PlayBlock/>
                    </div>
                   <ResetButton/>
                </div>
               
            </div>
           

        );

    }
}