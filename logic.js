const quoteBtn=document.getElementById("new-quote");
const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");
const tweetBtn=document.getElementById("tweet");
quoteBtn.addEventListener("click",()=> {getQuote("https://dummyjson.com/quotes/random")});
getQuote("https://dummyjson.com/quotes/random");

async function getQuote(url){
    const response=await fetch(url);
    var data=await response.json();
    quoteText.innerHTML=data.quote;
    authorText.innerHTML=`By ${data.author}`;
}

tweetBtn.addEventListener("click",()=>{
   window.open("https://twitter.com", "_blank");
})

const voiceBtn=document.getElementById("read-aloud");
const synth = window.speechSynthesis;

function readAloud(){
    synth.cancel();
     let quoteRead=quoteText.innerText;
    let authorRead=authorText.innerText;
    const speakText=new SpeechSynthesisUtterance(`${quoteRead} ${authorRead}`);
    speakText.rate=1;
    speakText.pitch=1;
    synth.speak(speakText);
}
voiceBtn.addEventListener("click",()=>readAloud());

const modeBtn=document.getElementById("mode");
modeBtn.addEventListener("click",()=>{
    if(document.body.classList.contains("dark-mode")){
        modeBtn.innerText="Light Mode";
        document.body.classList.remove("dark-mode");
    } else {
        modeBtn.innerText="Dark Mode";
        document.body.classList.add("dark-mode");
    }
})