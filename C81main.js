canvas=document.getElementById("myCanvas");
var colour="silver"
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth=8;
ctx.arc(325, 143, 40, 0,2*Math.PI );
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth=8;
ctx.arc(375, 143, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth=8;
ctx.arc(425, 143, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth=8;
ctx.arc(475, 143, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth=8;
ctx.rect(180, 50, 500, 300 );
ctx.stroke();







