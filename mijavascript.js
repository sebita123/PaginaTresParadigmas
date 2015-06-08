function inicial(){

$("body").hide().fadeIn(2000);

$(".margen1").hide(0).toggle("bounce",2000).shadow("raised");

$(".explode").hide(0).toggle("bounce",2000);
$(".explode").mouseover(function(){
	$(this).hide(0).toggle("shake",1000)
	
	});
	
	$(".cont1").shadow("raised");
	$(".cont2").shadow("raised");
	$(".cont3").shadow("raised");
	$("#primero").hide();
$(".desplazar").hide().toggle("slide",2000);
$("#primero").hide().toggle("bounce",2000);
$(".medium").hide().toggle("bounce",2000);

			$(".cont1").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000)
		
});
$(".cont2").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000)});
					$(".cont3").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000)});
		
		$("li").shadow("raised");
	
	


$(".aparecer").hide();
$("#descripcion1").mouseover(function(){
	
	$(".aparecer").toggle();
	
	});
	$("#descripcion1").mouseleave(function(){
	
	$(".aparecer").hide();
	
	});
	
	$("li").mouseover(function(){
		$(this).hide(0).toggle("highlight",1000);
		
		});


}
inicial();