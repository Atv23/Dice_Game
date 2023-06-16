function myfunc()
{
    var a= Math.random();
a= Math.floor(a*6 + 1);
var counta,countb;
counta=Number(document.querySelector("#player1").innerHTML);
countb=Number(document.querySelector("#player2").innerHTML);
//console.log(a);
if(a===1)
    document.querySelector(".img1").setAttribute("src","/images/dice1.png");
else if(a===2)
    document.querySelector(".img1").setAttribute("src","/images/dice2.png");
else if(a===3)
    document.querySelector(".img1").setAttribute("src","/images/dice3.png");
else if(a===4)
    document.querySelector(".img1").setAttribute("src","/images/dice4.png");
else if(a===5)
    document.querySelector(".img1").setAttribute("src","/images/dice5.png");
else if(a===6)
    document.querySelector(".img1").setAttribute("src","/images/dice6.png");

var b= Math.random();
b= Math.floor(b*6 + 1);
//console.log(b);
if(b===1)
    document.querySelector(".img2").setAttribute("src","/images/dice1.png");
else if(b===2)
    document.querySelector(".img2").setAttribute("src","/images/dice2.png");
else if(b===3)
    document.querySelector(".img2").setAttribute("src","/images/dice3.png");
else if(b===4)
    document.querySelector(".img2").setAttribute("src","/images/dice4.png");
else if(b===5)
    document.querySelector(".img2").setAttribute("src","/images/dice5.png");
else if(b==6)
    document.querySelector(".img2").setAttribute("src","/images/dice6.png");

if(a>b)
{
    document.querySelector("h1").innerHTML="Player 1 Wins 🏆";
    document.querySelector("#player1").innerHTML=counta+1;
}
    
else if(b>a)
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🏆";
    document.querySelector("#player2").innerHTML=countb+1;
}
    
else
    document.querySelector("h1").innerHTML="Draw 🔄";
}

