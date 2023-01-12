function opensidenav()
{
    var x=document.getElementById('side-nav');
    x.style.right=0;
    x.style.boxShadow="-2vw 0 2vw rgba(0, 0,0, 0.7)";

}
function closesidenav()
{
    var x=document.getElementById('side-nav');
    x.style.right="-50vw";
    x.style.boxShadow="none";
}