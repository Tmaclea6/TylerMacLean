import React, { Fragment } from "react";
import "../.././Wedding.css";
function Wedding() {
  return (
    <div>
    <head>
        <title>Save the Date - Kira & Tyler's Wedding</title>
    </head>
    <body>
        <header>
          
            <p class="grey-qo-regular">Join us for the wedding celebration of</p>
         
            <p class="grey-qo-regular">Kira & Tyler</p>
        </header>

        <div class="container">
            <div class="location">We're excited to announce our wedding and would be honored to have you join us on this special day.</div>
            <div class="date-section">
                <div class="date">June 22, 2024</div>
                <div class="location">Ceremony & Reception at Green Hill Lake Camp</div>
            </div>

            <span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBJkd0V2FeG27PqynlsnU39fkpeFNKd1EXUQAjxbrs8JXH4Q/viewform?usp=sf_link" class="cta-button">RSVP</a>
            <a href="#details" class="cta-button">Details</a>
            <a href="https://www.myregistry.com/giftlist/macleanwedding" class="cta-button">Registry</a>
            </span>
        </div>
        <center>
    <span height="400px"> 
        <img class="round" src={process.env.PUBLIC_URL +"/enguagement.jfif"} max-height="500px" width="40%"/>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.3997548452357!2d-67.03433792475748!3d46.06306969328394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4698d9f99f4fb%3A0xe5c1ad201c46fd97!2s40%20Greenhill%20Lake%20Rd%2C%20Greenhill%2C%20NB%20E6E%201E9!5e0!3m2!1sen!2sca!4v1695664123570!5m2!1sen!2sca" class="map" style={{border:0, flexGrow:1}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </span>
        </center>
        <div class="container">
            <center id="details" class="grey-qo-regular-purple">Details</center>
            <div class="bold">What should I bring?</div>
            <div> There will be lots of outdoor activities after the cerimony and there are places to change so bring active clothes and swimtrunks</div>
            <div class="bold">What should I not bring?</div>
            <div>It is a dry campus, Drugs and Alcohol are not permitted, Thanks!</div>
            <div class="bold">Activities?</div>
            <div>Activities include Lawn games and an inflatabel water park</div>
            <div class="bold">Food?</div>
            <div>The Cremony will be followed by a BBQ picnic style lunch</div>
            

        </div>
        
    </body>
    </div>
    );
}
export default Wedding;