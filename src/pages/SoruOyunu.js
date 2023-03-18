import React from 'react';
import './SoruOyunu.css';

const SoruOyunu = () => {
    return (
    <div className="page">
        <h1 className="game-name">Soru Oyunu</h1>
        <p id="question"></p>
        <form>
            <input type="radio" className="inputs" name="answer" value="a"/> <span id="option-a"></span><br/>
            <input type="radio" className="inputs" name="answer" value="b"/> <span id="option-b"></span><br/>
            <input type="radio" className="inputs" name="answer" value="c"/> <span id="option-c"></span><br/>
            <input type="radio" className="inputs" name="answer" value="d"/> <span id="option-d"></span><br/>
            <button type="button" onClick="checkAnswer()" className="kontrol-et">Kontrol et</button>
        </form>
        <p id="result"></p>
        <p id="score"></p>
        <button id="try-again">Tekrar dene!</button>
        <div id="congrats-text"></div>
        <canvas id="congrats"></canvas>
    </div>
    )
}

var questions = [
    {
        question: "1-) Bitkilerin sap ve dallarını öğütmek veya fındığın dış kabuğunu ayırmak için kullanılan, harman işini yapan makineye ne ad verilir?",
        options: {
            a: "Patoz",
            b: "Takoz",
            c: "Tonoz",
            d: "Moloz"
        },
        answer: "d"
    },
    {
        question: "2-) Hangisi yönetmenliği Woody Allen'ın yaptığı bir film değildir?",
        options: {
            a: "Roma'ya sevgilerle",
            b: "Paris'te Gece Yarısı",
            c: "Barselona, Barselona",
            d: "Büyük Budapeşte Oteli"
        },
        answer: "d"
    },
    {
        question: "3-) Pazen nedir?",
        options: {
            a: "Bir tarım aleti",
            b: "\"Ara sıra\" anlamında bir kelime",
            c: "Bir kumaş türü",
            d: "Bir müzik aleti"
        },
        answer: "c"
    },
    {
        question: "4-) \"Roland-Garros şampiyonu\" olan biri hangi sporu yapıyordur?",
        options: {
            a: "Tenis",
            b: "Gold",
            c: "Bilardo",
            d: "Boks"
        },
        answer: "a"
    },
    {
        question: "5-) Duru sakin havada çıkan kuru soğuk anlamına gelen ayaz kelimesinin kökeni hangisidir?",
        options: {
            a: "Aydınlık",
            b: "Keskinlik",
            c: "Karanlık",
            d: "Yalnızlık"
        },
        answer: "a"
    },
    {
        question: "6-) Hangisi Fransız heykeltıraş Rodin’in eserlerinden biri değildir?",
        options: {
            a: "Düşünen adam",
            b: "Çömelen Kadın",
            c: "Yürüyen Adam",
            d: "Uyuyan Kadın"
        },
        answer: "d"
    },
    {
        question: "7-) Günümüzde özellikle Kur’an-ı Kerim okurken kullanılan küçük masaya ne ad verilir?",
        options: {
            a: "Minber",
            b: "Rahle",
            c: "Kandil",
            d: "Mihrap"
        },
        answer: "b"
    },
    {
        question: "8-) Hangisi Oğlak Dönencesi üzerinde toprağı bulunan ülkelerden biri değildir?",
        options: {
            a: "Hindistan",
            b: "Mozambik",
            c: "Brezilya",
            d: "Avustralya"
        },
        answer: "a"
    },
    {
        question: "9-) 1'den büyük bir tam sayıyı kendisiyle çarparsanız onun nesini bulursunuz?",
        options: {
            a: "Karesini",
            b: "Küpünü",
            c: "Karekökünü",
            d: "Küpkökünü"
        },
        answer: "a"
    },
    {
        question: "10-) 10.000, 1.000, 100, 10 ve 1'in çarpımı kaç eder?",
        options: {
            a: "On milyon",
            b: "On milyar",
            c: "On trilyon",
            d: "On katrilyon"
        },
        answer: "b"
    },
    // more questions
];

var currentQuestion = 0;
var score = 0;
if(score >= 100)
{score = 100;}

function displayQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("option-a").innerHTML = question.options.a;
    document.getElementById("option-b").innerHTML = question.options.b;
    document.getElementById("option-c").innerHTML = question.options.c;
    document.getElementById("option-d").innerHTML = question.options.d;
    document.querySelector("input[name='answer']").checked = false;
    document.getElementById("result").innerHTML = "";
}

function checkAnswer() {
    var answer = document.querySelector("input[name='answer']:checked").value;
    if (answer === questions[currentQuestion].answer) {
        document.getElementById("result").innerHTML = "Tebrikler!";
        score += 10;
    } else {
        if(currentQuestion === 0){
            document.getElementById("question").innerHTML = "Game Over! <br> Yanlış cevapladınız. Doğru cevap: " + "\"" + questions[currentQuestion].options[questions[currentQuestion].answer] + "\"" + " olmalıydı!";
            document.getElementById("try-again").style.display = "block";
            document.getElementById("try-again").addEventListener("click", function(){
                window.location.reload();
            })
            document.querySelector("form").style.display = "none";
            document.querySelector("button").style.display = "none";
        document.getElementById("score").innerHTML = "Toplam skor: " + score + " / 100";
            return;
        }else{
            document.getElementById("result").innerHTML = "Game Over! <br> Yanlış cevapladınız. Doğru cevap: " + "\"" + questions[currentQuestion].options[questions[currentQuestion].answer] + "\"" + " olmalıydı!";
            document.getElementById("try-again").style.display = "block";
            document.getElementById("try-again").addEventListener("click", function(){
                window.location.reload();
            })
            document.querySelector("form").style.display = "none";
            document.querySelector("button").style.display = "none";
        document.getElementById("score").innerHTML = "Toplam skor: " + score + " / 100";
            return;
        }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("question").innerHTML = "Game Over!";
        document.getElementById("score").innerHTML = "Toplam skor: " + score + " / 100";
        if (score >= 100) {
            var text = document.getElementById("congrats-text");
            text.innerHTML = "Tebrikler!";
            text.style.color = "#DA0463";
            text.style.fontSize = "50px";
            text.style.textAlign = "center";
            text.style.position = "absolute";
            text.style.top = "50%";
            text.style.left = "50%";
            text.style.transform = "translate(-50%, -50%)";
        }
        
        
        document.querySelector("form").style.display = "none";
        document.querySelector("button").style.display = "none";
    }
}



displayQuestion();


export default SoruOyunu;