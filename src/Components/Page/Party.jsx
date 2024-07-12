import React, { Fragment } from "react";
import "../.././Party.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Party() {
  return (
    <div>
    <head>
        <title>Party Invite</title>
    </head>
    <body>
        <header class="color">
            <h1 class="fs60">You're Invited!</h1>
         
            <h1 class="fs60">Kira & Tyler's Newlywed Party</h1>
        </header>

        <div class=" container">
            <div class="location">It's a party Party that we are having</div>
            <div class="date-section">
                <div class="date">July 19, 2024</div>
                <div class="location">710 Mitchell St</div>
            </div>

            <span>
        
                <a href="https://docs.google.com/forms/d/18CW1hOymNfItDfwnDzowXjQwcfXHP8NLV559Af5WZXE/viewform?usp=sf_link" class="color cta-button">RSVP</a>
                    
                <a href="#details" class="color cta-button">Details</a>
            </span>
        </div>
        <center>
            <span height="400px"> 
                 <img class="round" src={process.env.PUBLIC_URL +"/weddingphoto.jpg"} max-height="500px" width="40%"/>
        
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5548.055057840998!2d-66.6519733!3d45.950733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4220d3c059563%3A0x10821ebd663a0ccc!2s710%20Mitchell%20St%2C%20Fredericton%2C%20NB%20E3B%203S6!5e0!3m2!1sen!2sca!4v1720638477809!5m2!1sen!2sca" class="map" style={{border:0, flexGrow:1}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </span>
        </center>
        <div class="container">
            <center id="details" class="color">
                <h1>Details</h1>
            </center>
            <div class="bold">Time?</div>
            <div>7:00pm till whenever!   </div>
            <div class="bold">What should I bring?</div>
            <div> Bring a Drink or 10</div>
            <div class="bold">What should I wear?</div>
            <div>A funky hat is encouraged but not required</div>
        </div>
        
    </body>
    </div>
    );
}
export default Party;