import React from "react";
import html2canvas from "html2canvas";
import './SearchFinder.css';

const SearchFinder = () => {
    return (  
        <div className="page-body" id="to_save">
        <div className="pg-tp">
        </div>
        
        <p className="mg_auto">  <span id='time'></span> Time to next game! </p>

        <div id="About">
            <div className="aboutme">
                <h3>Hello There I'm Berkay ^Teory^ Koksal.</h3>
                <p> I am a Frontend Web Developer from Turkey. I knowledge in HTML5, CSS3, JavaScript, React, Photoshop, Adobe XD and BOOTSTRAP. I have 2+ years of experience in Game development. using Unity. You can ask anything that comes to your mind.</p>
                <a href="mailto:berkay.koksall54@gmail.com" className="ab-ml">Contact Me!</a>
            </div>
        </div>
        
        {/* <!-- Create a centered photo grid with 4 pictures --> */}
        <div className="row">
        <div className="column">
            <div className="image"><img src="./images/n1.png"/></div>
            <div className="image"><img src="./images/n2.png"/></div>
        </div>
        <div className="column">
            <div className="image"><img src="./images/n3.png"/></div>
            <div className="image"><img src="./images/n4.png"/></div>
        </div>
        </div>

        <div id="rules"></div>


        <div className="inputdiv">
            {/* <!--Add a textbox with here for the user to input a long sentence--> */}
            <input type="text" className="inputbox" id="input" placeholder="Guess the prompt"/>
            {/* <!--Add a button that says Enter and when clicked, it will call the function checkinputsentence-->  */}
            <button className="btn">Enter</button>

        {/* <!-- Add div element for text with a black border--> */}
        </div>
        <div className="share" id="share">
            <button className="btn sharebtn" id="download"><b>SHARE</b></button>
            <div id="output"></div>
        </div>
        {/* <!-- <div id="output"></div> --> */}

        <div className="line">
            <div id="line1" className="lines"></div>
            <div id="line2" className="lines"></div>
            <div id="line3" className="lines"></div>
            <div id="line4" className="lines"></div>
            <div id="line5" className="lines"></div>
        </div>


        <div id="game-board">

        </div>
    </div>
    )
}

(function() {
    var start = new Date;
    start.setHours(23, 59, 59); // 11:59pm
   
    function pad(num) {
      return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
      var now = new Date;
      if (now > start) { // too late, go to tomorrow
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);
      document.getElementById('time').innerHTML =
        hh + ":" + mm + ":" + ss;
      setTimeout(tick, 1000);
    }

   document.addEventListener('DOMContentLoaded', tick);
})();



('#AboutFunction').click(function() {
    ('#About').toggle('fast', function() {
    });
});


( "#download" ).on( "click", function() {
    html2canvas(document.querySelector("#to_save")).then(canvas => {
      canvas.toBlob(function(blob) {
        window.saveAs(blob, getFormattedTime());
        function getFormattedTime() {
              var today = new Date();
              var y = today.getFullYear();
              // JavaScript months are 0-based.
              var m = today.getMonth() + 1;
              var d = today.getDate();
              return y + "-" + m + "-" + d;
        }
      });
      });
});

export default SearchFinder;