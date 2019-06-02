function fullname(){
    //นำค่ามาจาก form มาทำงานใน javascript
    //var name=document.form1.txt1.value;
    //alert("ชื่อ :" + name);
    var r =confirm("บันทึกข้อมูลใช่ไหม");
    var s = document.form1.txt1.value;
    var l = document.form1.txt2.value;
    if(r == true){
        document.write(s + l);
    }
    else {

    }
}
function check(){
    document.getElementById("p1").innerHTML="edit";

}
function enter(){
    var name = prompt("enter your name");
    document.getElementById("p1").innerHTML=name ;
}
function testloop(){
    var sumAll = 0;
    for(var i = 0 ; i < arguments.length;i++){
        sumAll+=arguments[i];
    }
    document.getElementById("p1").innerHTML= sumAll;
}