      $(document).ready(function(){
  var countpom=parseInt($("#pomtime").html());
   var countbreak=parseInt($("#breaktime").html());
  console.log(countpom);
  console.log(countbreak);
  var cp,cb;
  var pomover = $("#pomover")[0];
  var breakover = $("#breakover")[0];

   windowHeight = $(window).innerHeight();
    $('#pomodoro').css('min-height', windowHeight*0.5);
      $('#break').css('min-height', windowHeight*0.5);

  $("#reducepomodoro").click(function(){
  if(countpom>1){
    countpom=countpom-1;
    $("#pomtime").html(countpom);
  }
  cp=countpom*60;
});

   $("#addpomodoro").click(function(){
  if(countpom<45){
    countpom=countpom+1;
    $("#pomtime").html(countpom);
  }
  cp=countpom*60;
});

  $("#reducebreak").click(function(){
  if(countbreak>1){
    countbreak=countbreak-1;
    $("#breaktime").html(countbreak);
  }
cb=countbreak*60;
});
  $("#addbreak").click(function(){
  if(countbreak<20){
    countbreak++;
    $("#breaktime").html(countbreak);

  }
cb=countbreak*60;
});

cp=countpom*60;
cb=countbreak*60;

  $("#start").click(function(){
    countpom=cp;
    countbreak=cb;
    $("#pomodoro,#start").css("visibility","visible");
       $("#break,.timepomo").css('visibility','hidden');
       var pomocounter=setInterval(pomcallback, 1000);
        function pomcallback(){
             console.log("cp"+cp);
             console.log("contpom:"+countpom);
             countpom--;
         if(countpom===0)
          {   clearInterval(pomocounter);
        pomover.play();
           countpom=cp;
            $("#break").css('visibility','visible');
           $("#break").css('visibilty','visible');



             var breakcounter=setInterval(breakcallback,1000);
                 function breakcallback(){
             $("#timebreak").css('visibility','hidden')
            //  $("#breakclock").html(countbreak);

               $("#pomodoro").css('visibility','hidden');
 if(countbreak%60>10)
          {

            $("#breakclock").html(Math.floor(countbreak/60)+":"+countbreak%60);

          }
          else{

            $("#breakclock").html(Math.floor(countbreak/60)+": 0"+countbreak%60);
          }
              countbreak--;
              if(countbreak===0){
clearInterval(breakcounter);


breakover.play();
countbreak=cb;
            $("#start").click();
              }

            }
          }
          if(countpom%60>10)
          {

            $("#pomodoroclock").html(Math.floor(countpom/60)+":"+countpom%60);

          }
          else{

            $("#pomodoroclock").html(Math.floor(countpom/60)+": 0"+countpom%60);
          }
          //$("#pomodoroclock").html(countpom);

        }
  });// end of start

$("#reset").click(function(){
  location.reload();
  //page refresh;
});



});// end of document.ready();



