$(function() {
    $( document ).tooltip({
        tooltipClass: "uitooltip",
        position: {
        my: "center bottom",
        at: "buttom"
        },
        show: {
        effect: "fade",
        },
        hide: {
        effect: "fade",
      }        
    })
  })

$(".button1").click(function(){
	alert("Coming soon!")
})

$(".button2").click(function(){
	alert("Volume up up up!")
})

$(".h1").click(function(){
	alert("Volume up up up!")
})

$(".h1").hover(function(){
	//this menu is already open
	if ($(this).hasClass("open1")){
		//remove the open class
		$(this).removeClass("open1")
		//otherwiSe it isn't open
	}else{
		//add the "open" class
		$(this).addClass("open1")
	}
	})

$("button2").hover(function(){
	$(".h1").addClass("open1")
})

$(".text").hover(function(){
	if ($(this).hasClass("open5")){
		$(this).removeClass("open5")
	}else{
		$(this).addClass("open5")
	}
	})

$(".sentense1").click(function(){
	//this menu is already open
	if ($(this).hasClass("open2")){
		//remove the open class
		$(this).removeClass("open2")
		//otherwiSe it isn't open
	}else{
		//add the "open" class
		$(this).addClass("open2")
	}
	})

$(".sentense2").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense3").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense4").click(function(){
	//this menu is already open
	if ($(this).hasClass("open3")){
		//remove the open class
		$(this).removeClass("open3")
		//otherwiSe it isn't open
	}else{
		//add the "open" class
		$(this).addClass("open3")
	}
	})

$(".sentense5").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense6").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense7").click(function(){
	if ($(this).hasClass("open4")){
		$(this).removeClass("open4")
	}else{
		$(this).addClass("open4")
	}
	})

$(".sentense8").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense9").click(function(){
	if ($(this).hasClass("open4")){
		$(this).removeClass("open4")
	}else{
		$(this).addClass("open4")
	}
	})

$(".sentense10").click(function(){
	if ($(this).hasClass("open4")){
		$(this).removeClass("open4")
	}else{
		$(this).addClass("open4")
	}
	})

$(".sentense11").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense12").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense13").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense14").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense141").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense15").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})

$(".sentense16").click(function(){
	if ($(this).hasClass("open3")){
		$(this).removeClass("open3")
	}else{
		$(this).addClass("open3")
	}
	})

$(".sentense17").click(function(){
	if ($(this).hasClass("open2")){
		$(this).removeClass("open2")
	}else{
		$(this).addClass("open2")
	}
	})


var x = document.getElementById("sound1"); 
document.getElementById("sound1").loop = true;

function playAudio() { 
  x.play(); 
} 








