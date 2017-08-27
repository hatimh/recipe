$(document).ready(function() {
  $("li img").hover(function(){
   $(this).toggleClass("hover-image");
  })

  var $active = $("#nav-bar li:first-child");

  $("#nav-bar li:first-child").css("background-color","rgb(240,170,50)");
  $(".procedure-step").hide();
  $("#step0").show();

  var imgshow = true;

  $("#nav-bar li").mouseover(function(){
    $(this).css("background-color","rgb(240,170,50)");
  })

  $("#nav-bar li").mouseout(function() {
    if($(this).html()!=$active.html()) {
      $(this).css("background-color","rgb(255,255,85)");
    }
  })

  $("#nav-bar li").click(function(){
    $active =  $(this);
    $("#nav-bar li").css("background-color","rgb(255,255,85)");
    $(this).css("background-color","rgb(240,170,50)");
    $(".procedure-step").hide();
    $("#step" + ($("#nav-bar li").index($(this)))).show();
  })

  $("#ingredients li").prepend("<input type='checkbox'>");

  $("#button a").click(function(){
    $("img").toggle(1000)
  })
})
