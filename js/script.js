$(document).ready(function (){
	$('.navlink').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},1000);
		
	});
});

// toggle visibility for css3 animations 
$(document).ready(function() {
	$('#head').addClass('visibility');
	$('#banner').addClass('visibility');
	$('#cont').addClass('visibility');
	$('#contacto').addClass('visibility');
	$('#footer').addClass('visibility');
});
$(window).scroll(function () {
//animations	
	$('#product, #banner, #cont').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("animated fadeInUp");
			}		
	});
	$('#contacto, #footer').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+900) {
				$(this).addClass("animated fadeIn");
			}		
	});	
});

function abrirTab(e){
	document.getElementById(e).click();
}

window.onload=function(){
	$("#head").addClass("zoom");
	setTimeout(function(){
	$("#head").removeClass("zoom");
	},5000);
}

function habilitartab(elemento){
	var verificarmobile = document.getElementById("idverificarmobile").style.display;
	if (verificarmobile!="none"){
	  var tabactual = document.getElementById("tabactual").value;
	  document.getElementById("tabactual").value = elemento;      
	  if (tabactual==elemento){
	    document.getElementById("tabgeneral").style.display = "none";
	    document.getElementById("tabactual").value = "";
	  }else{

	    document.getElementById("tabgeneral").style.display = "block";
	  }      
	}      
}