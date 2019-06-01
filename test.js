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