var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
var result=document.querySelector(".container h1");
if(randomNumber1>randomNumber2){
result.innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    result.innerHTML="Player2 Wins🚩";
}
else{
    result.innerHTML="Draw!";
}








