import React, { Fragment } from "react";
import "../.././Redirect.css"
function Redirect(){
return(
<div class="background2">
<head>
    <title>Tyler MacLean</title>
</head>
<body class="background2 title">
    
       <center>
        <img src={process.env.PUBLIC_URL +"/Headshot2024.png"} max-height='300px' width='30%'  className="background title"></img>
      </center>
        <span>
    
         <a href="https://github.com/Tmaclea6">
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/github.png'}/>
        </a>
        <a href="https://www.linkedin.com/in/tylerdmaclean/">
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/LinkedIn_logo_initials.png'}/>
        </a>
        <a href='/Plangame' >
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/PlanGame.png'}/>
        </a>  
        <a href='http://www.heresthescoophanwell.com/' >
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/Heresthescoop.png'}/>
        </a> 
        <a href='/Place' >
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/Place.png'}/>
        </a> 
        </span>
    </body>
</div>
  );
}
export default Redirect;
