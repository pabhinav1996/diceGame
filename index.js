var r1 = Math.floor(Math.random()*6) + 1;

var randomImageSource1 ="images/dice"+r1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

var r2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice"+r2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (r1>r2)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(r1 === r2)
{
  document.querySelector("h1").innerHTML = "Draw";
}
else
{
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
