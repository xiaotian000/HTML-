function myFunction(){
    var x = document.getElementById("eg").value;
    if(x == ""||isNaN(x))
    {
        alert("不是数字");
    }
}