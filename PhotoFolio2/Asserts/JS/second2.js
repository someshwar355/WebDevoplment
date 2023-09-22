function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.opacity = "0.0";
}
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("main").style.position = "absolute";
}