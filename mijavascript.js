function inicial(){
	$("li").shadow("raised");
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

		

	
	$("li").click(function(){
		$(this).hide(0).toggle("bounce",3000);
		
		});

		
		
		
		
		$("#queescch").click(function(){
			
			$("#hide1").toggle("explode",1000).shadow("raised").html("el lenguaje c#").css("font-family","Verdana, Geneva, sans-serif").css("color","#000").append("<div><h1> C#</h1></div><div><p>es un lenguaje orientado a objetos, desarrollado por Microsoft el cual comenzó a ser parte de su plataforma .net, su sitaxis deriva de C y C++, este lenguaje fue creado en enero del año 1999</p></div>");
			});
		
}
