 function displayDate(){
                document.getElementById("demo").innerHTML=Date();

}
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落</p>");
function changeImage(){
    element=document.getElementById('myimage')
    if(element.src.match("bulbon"))
    {
        element.src="images/pic_bulboff.gif";
    }
    else{
        element.src="images/pic_bulbon.gif";
    }
}
