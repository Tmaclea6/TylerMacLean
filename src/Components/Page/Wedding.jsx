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
            <h1>Save the Date</h1>
            <p>Join us for the wedding celebration of</p>
            <h2>Kira & Tyler</h2>
        </header>

        <div class="container">
            <p>We're excited to announce our wedding and would be honored to have you join us on this special day.</p>

            <div class="date-section">
                <div class="date">June 22, 2024</div>
                <div class="location">Ceremony & Reception at Green Hill Lake Camp</div>
            </div>

            <p>Formal invitation with more details to follow. Please save the date and stay tuned for updates.</p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBJkd0V2FeG27PqynlsnU39fkpeFNKd1EXUQAjxbrs8JXH4Q/viewform?usp=sf_link" class="cta-button">RSVP</a>
        </div>
        <center>
        <img class="round" src={process.env.PUBLIC_URL +"/enguagement.jfif"} width="500"/>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.3997548452357!2d-67.03433792475748!3d46.06306969328394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4698d9f99f4fb%3A0xe5c1ad201c46fd97!2s40%20Greenhill%20Lake%20Rd%2C%20Greenhill%2C%20NB%20E6E%201E9!5e0!3m2!1sen!2sca!4v1695664123570!5m2!1sen!2sca" width="600" height="450" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </center>
        
    </body>
    </div>
    );
}
export default Wedding;