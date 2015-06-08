function inicial(){
$("#hide1").css("visibility","visible").hide();
$("#hide2").css("visibility","visible").hide();
$("#hide3").css("visibility","visible").hide();
$("body").hide().fadeIn(2000);

$(".margen1").hide(0).toggle("bounce",2000).shadow("raised");

$(".explode").hide(0).toggle("bounce",2000);
$(".explode").mouseover(function(){
	$(this).hide(0).toggle("shake",1000)
	
	});
	
	$(".cont1").shadow("raised");
	$(".cont2").shadow("raised");
	$(".cont3").shadow("raised");
	
	

$(".desplazar").hide().toggle("slide",2000);
$("#primero").hide().toggle("bounce",3000);
$("#segundo").hide().toggle("bounce",3000);
$("#tercero").hide().toggle("bounce",3000);
$(".medium").hide().toggle("bounce",3000);

			$(".cont1").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000)
		
});
$(".cont2").mouseover(function(){
		$(this).hide(0).toggle("highlight",1)});
					$(".cont3").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000)});
		
		$("li").shadow("raised");

	
	$("li").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000);
		
		});
		
		
		
		
		$("#queescch").click(function(){
			
			$("#hide1").slideToggle(1000).shadow("raised").html("el lenguaje c#").css("font-family","Verdana, Geneva, sans-serif").css("color","#333").append("<div><h1> hello world</h1></div>");
			});
		
}
