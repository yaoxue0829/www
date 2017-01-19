window.onload=function(){
	showTime();
	function checktime(i){
         if(i<10){
         	i="0"+i;
         }
         return i;
	}
    function showTime(){

    var times=document.getElementById("times");
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var dat=date.getDate();
    var arr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var day=arr[date.getDay()];
    var hour=date.getHours();
   
    var Minu=date.getMinutes();
    var sec=date.getSeconds();
    Minu=checktime(Minu);
    sec=checktime(sec);
    times.innerHTML=year+"年"+month+"月"+dat+"日"+" "+day+" "+hour+":"+Minu+":"+sec;
    setTimeout(showTime,1000);
    }
 


 // document.onkeydown=function(ev){
 //          var ev=ev||event;
 //         if(ev.keyCode==123){
 //            return false;
 //         }

 //        }
 //       document.oncontextmenu=function(){
 //         return false;
 //       }









}