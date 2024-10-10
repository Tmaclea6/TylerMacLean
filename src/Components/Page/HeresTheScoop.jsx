import React, { Fragment } from "react";
import "../.././HTS.css";
import 'reactjs-popup/dist/index.css';


function HeresTheScoop() {
    const mapStr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.307982014144!2d-66.75374768424275!3d45.90515191193227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca42360cdaaa3b3%3A0x45e63f9cfe2196fb!2s2053%20NB-640%2C%20Hanwell%2C%20NB%20E3C%201M6!5e0!3m2!1sen!2sca!4v1597947007330!5m2!1sen!2sca";
  return (
<html>
    <head>
        <link href="icon.png" rel="icon" />
        <title>Heres The Scoop</title>
        <link href="main.css" rel="stylesheet" type="text/css" />
        <link href="css/ie6.css" media="all" rel="stylesheet" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet"/>
    </head>
    <body class="home" id="index">
    <div class="header">
    <a href="#default" class="logo">
        <img src={process.env.PUBLIC_URL +'/logo.png'} class = "logo"/>
    </a>
    <div class="header-right">
        <a class="active happy-monkey bigText" href="#hours">Hours</a>
        <a class = "happy-monkey pink bigText" padding-right="15px" href="#social">Social</a>
        <a class = "happy-monkey purple bigText" padding-right="15px" href="#details">Details</a>
    </div>
    </div>
    <div id="fb-root"></div>

    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="Zx3YX2ZN"></script>

    <p><img id="default" alt="Heres The Scoop logo" class="center" height="683" src={process.env.PUBLIC_URL +'/im1.png'} width="694.5" /></p>

    <p></p>

    <center>
        <h1 id="hours" class="bigText happy-monkey">Summer Hours</h1>
        <table class="lilText happy-monkey">
            <tbody>
                <tr>
                    <th>Monday - Friday</th>
                    <td>5pm - 9pm</td>
                </tr>
                <tr>
                    <th>Saturday, Sunday, Holidays  </th>
                    <td>1pm - 9pm</td>
                </tr>
            </tbody>
        </table>
        <h1 class="bigText happy-monkey">School Year Hours</h1>
        <table class="lilText happy-monkey">
            <tbody>
                <tr>
                    <th>Thursday & Friday</th>
                    <td>5pm - 9pm</td>
                </tr>
                <tr>
                    <th>Saturday, Sunday, Holidays  </th>
                    <td>1pm - 9pm</td>
                </tr>
            </tbody>
        </table>
    </center>

    <p><br />
    <iframe allowfullscreen="" aria-hidden="false" class="center" frameborder="0" height="450" src={mapStr} tabindex="0" width="600"></iframe></p>

    <p></p>

    <p></p>

    <p></p>

    <center>


    <p id= "details" class="happy-monkey lilText details">Open for the season annually, starting Friday of the Victoria Day long weekend and aim to operate until Thanksgiving weekend if the weather cooperates and enough customers continue to visit.  Hours of operation are weather dependent, closed if raining, but will reopen if rain stops within the typical business hours.
    </p>

    <p class="happy-monkey lilText details">Looking forward to seeing everyone again soon. Private message through our Facebook page if you would like to submit a resume to work at Here’s The Scoop this summer.
    </p>
    <iframe id="social" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fheresthescoophanwell&tabs=timeline&width=700&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="700" height="800" class="fb" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

    </center>
    </body>
</html>


  );
}

export default HeresTheScoop;
