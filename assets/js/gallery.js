function popupimgopen(n)
{
    var x=document.getElementsByClassName('gallery-popup')[0];
    x.style.display="block";
    var y=document.getElementById('popup-img');
    var z="../img/g"+n+".jpg";
    y.src=z;
}
function popupimgclose()
{
    var x=document.getElementsByClassName('gallery-popup')[0];
    x.style.display="none";

}