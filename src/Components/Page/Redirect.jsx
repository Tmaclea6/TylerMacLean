import React, { Fragment } from "react";
function Redirect(){
return(
<div>
<head>
    <title>Tyler MacLean</title>
</head>
<body>
    
      <h1>Hope you find what you are looking for!</h1>
       


        <span>
    
         <a href="https://github.com/Tmaclea6">
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/Github.png'}/>
        </a>
        <a href="https://www.linkedin.com/in/tylermaclean/">
                <img height={250} width={250} class='roundish' src={process.env.PUBLIC_URL +'/Linkedin_logo_initials.png'}/>
        </a>
        <a href={process.env.PUBLIC_URL} >
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