import react from 'react';

 const SiteTitle=(props)=><h1 className="siteTitle">{props.children}</h1>


export const Header=(props)=><div>
    <SiteTitle>
        {props.SiteTitle}
    </SiteTitle>
    </div>;



