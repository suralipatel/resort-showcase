setInterval(slideshow,3000);
var x=0;

function slideshow()
{
    var y=document.getElementsByClassName('slide-show')[x];
    var x2=(x+2)%3;
    var z=document.getElementsByClassName('slide-show')[x2];
    y.style.opacity=1;
    z.style.opacity=0;
    x=(x+1)%3;
    
}