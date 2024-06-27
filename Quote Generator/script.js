const api_url="https://api.quotable.io/random";
const qoute=document.getElementById("quote");
const author=document.getElementById("author");
async function getQuote(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    qoute.innerHTML=data.content;
    author.innerHTML=data.author;
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ qoute.innerHTML+ "----- by" + author.innerHTML, "Tweet Window", "width=600, height=300");
}