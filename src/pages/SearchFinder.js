import React from "react";
import './SearchFinder.css';
import n1 from '../images/n1.png';
import n2 from '../images/n2.png';
import n3 from '../images/n3.png';
import n4 from '../images/n4.png';

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
            <div className="image"><img src={n1}/></div>
            <div className="image"><img src={n2}/></div>
        </div>
        <div className="column">
            <div className="image"><img src={n3}/></div>
            <div className="image"><img src={n4}/></div>
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




let NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = 1;
let masterguessedcorrect = false
let rightGuessString = "You got it";
let rulesText = "5 words, ";
let masterSentence = "cat in flying car"
console.log(rightGuessString);


//get the input from the textbox and compare it to the master sentence
function checkinputsentence() {
    let input = document.getElementById("input").value;
    //var result = compareSentences(input, masterSentence);

    //convert the input to lowercase
    input = input.toLowerCase();

    //console.log(compareSentences(input, masterSentence));
    //Set element with line concatenated with x as id to the input variable
    document.getElementById("line" + currentGuess).innerHTML = compareSentences2(input,masterSentence);
    
   
    //if masterguessedcorrect is true after the compareSentences2 function is called, update the output element with the rightGuessString
    if (masterguessedcorrect) {
        document.getElementById("rules").innerHTML = "You got it, the prompt was " + masterSentence;
        document.getElementById('share').style.visibility = 'visible';
        let btn = document.querySelector('.btn');
        btn.removeEventListener('click', checkinputsentence);
    } else {
        document.getElementById("rules").innerHTML = rulesText + (NUMBER_OF_GUESSES - currentGuess - 1) + " guesses remaining";
    }
    
    currentGuess++;
    if(currentGuess == NUMBER_OF_GUESSES){
        let btn = document.querySelector('.btn');
        btn.removeEventListener('click', checkinputsentence);

        let output = document.getElementById("rules");

        output.innerHTML = "Game Over, the prompt was " + masterSentence;

    }
}





//add a click event to the button that calls the checkinputsentence function
window.onload = function() {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', checkinputsentence);


    let rulesElement = document.getElementById("rules");
    rulesElement.innerHTML = rulesText + (NUMBER_OF_GUESSES - 1) + " guesses remaining";; 
}


//write a compareSentences2 function that takes the inputstring and compares it to the master sentence and updates the inputstring by making the background color green if the word is in the right place and yellow if the word is in the wrong place

function compareSentences2(inputstring, mastersentence) {
    let guessedcorrect = true;
    let newSentence = "";

    let compareString = inputstring.toLowerCase()
    //split the input string into an array
    let inputArray = inputstring.split(" ");
    let compareArray = compareString.split(" ");

    
    //split the master sentence into an array
    
    let masterArray = mastersentence.split(" ");
    //loop through the input array
    for (let i = 0; i < inputArray.length; i++) {
        console.log(compareArray[i]);
        //if the input array word is in the master array
        if (masterArray.includes(compareArray[i])) {
            //if the input array word is in the right place
            
            if (compareArray[i] === masterArray[i]) {
                //change the background color to green
                newSentence += "<span style='background-color: #0080007f;padding:5px; display:inline-flex;margin-top:2px;border-radius:20px'>" + inputArray[i] + "</span> ";
            }
            //if the input array word is in the wrong place
            else {
                //change the background color to yellow
                guessedcorrect = false;
                newSentence += "<span style='background-color: #ffff007f;padding:5px; display:inline-flex;margin-top:2px;border-radius:20px'>" + inputArray[i] + "</span> ";
            }
        }
        //if the input array word is not in the master array
        else {
            guessedcorrect = false;
            newSentence += "<span style='background-color: #8080807f;padding:5px; display:inline-flex;margin-top:2px;border-radius:20px'>" + inputArray[i] + "</span> ";
        }
    }


    if (masterArray.length != inputArray.length) {
        guessedcorrect = false;
    }

    //return the input string
    masterguessedcorrect = guessedcorrect;
    return newSentence;
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    console.log("I am coming from the plusSlides function");
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
        
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

}

export default SearchFinder;