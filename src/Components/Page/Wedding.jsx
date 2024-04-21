import React, { Fragment } from "react";
import "../.././Wedding.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
            
            <Popup trigger={<a class="cta-button">Registry</a>} position="center" modal>
                <div>
                    <center>
                        <p class='apple'>We truly mean it when we say that your presence and participation in our special day is all the gift we need! If you would still like to send us a physical gift, you can continue through to see our wedding registry. We do not have a cash fund listed as the fees associated with this program are high, but if you would like to make a contribution to our honeymoon fund, you are welcome to do so through cash or etransfer. </p>
                        <a href="https://www.myregistry.com/giftlist/macleanwedding" class="cta-button">Continue</a>
                    </center>
                </div>
            </Popup>
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
            <div class="bold">Time?</div>
            <div>Ceremony begins at 11:00am sharp. See you there!   </div>
            <div class="bold">What should I bring?</div>
            <div> After the ceremony, you will have the chance to explore the camp's activities! There are places to change, so please bring clothes you can play in and a bathing suit in case you really want to have fun!</div>
            <div class="bold">What should I wear?</div>
            <div>There is no real dress code for guests, but if you're planning on hopping in some pictures, be sure to wear something that makes you feel good!</div>
            <div class="bold">What should I not bring?</div>
            <div>For insurance purposes, GHLC is a dry site. Drugs and alcohol are not permitted under any circumstances. Thank you in advance for your understanding!</div>
            <div class="bold">What will we do?</div>
            <div>After the ceremony, activities will open, including but not limited to archery, lawn games, Archery Tag, swimming pool, canoeing/kayaking, and an inflatable water park.</div>
            <div class="bold">What will we eat?</div>
            <div>The ceremony will be followed by a BBQ picnic-style lunch and strawberry dessert bar. There will be plenty of snacks to tide you over until you're ready to head home!</div>
            <div class="bold">Who is included with this invite?</div>
            <div>Your whole household! If you have kids, please know they are invited intentionally and their participation is welcome and encouraged. If you have any further questions regardinmg who you can bring, please don't hesitate to reach out to one of us!</div>

        </div>
        
    </body>
    </div>
    );
}
export default Wedding;