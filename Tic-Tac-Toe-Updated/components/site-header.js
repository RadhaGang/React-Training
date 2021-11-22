import React from 'react';
import {SiteTitle} from './site-title';

const Component=(props)=>{

   // console.log('args',props);
    const titleStyle={color: props.color || "black"};

    return (
        <div className="header" >    
            <SiteTitle style={titleStyle}>{props.title} </SiteTitle>           
        </div>
    );

} ;

export default Component;