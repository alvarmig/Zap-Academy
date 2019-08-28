console.log("Cargando codigo JavaScript");

function getData(){
	var mensaje = document.getElementById('otroNombre').value;
	var valor2 = document.getElementById('valor2').value;
	
	console.log("Envio valor1: " + mensaje);
	console.log("Envio valor2: " + valor2);
	
	$.ajax({
		beforeSend : function (){
			console.log("Espera un momento....");
		},
		headers: { 
	        'Accept': 'application/json',
	        'Content-Type': 'application/json' 
	    },
        url: '/cgi-bin/recibir_datos_05_controller.pl?',
        data: {"mensaje" : mensaje},
		dataType: "json",
		success: function (responseData) {
            console.log("Me llego: " + JSON.stringify(responseData) );
           /* console.log("Me llego1: " + responseData.llaveprimaria );
            console.log("Me llego2: " + responseData.llego2 );*/
            console.log("Me llego3: " + responseData.la_respuesta_es );
			document.getElementById("aqui_va_la_respuesta").innerHTML = "<strong style='color:blue'>" + responseData.la_respuesta_es+ "</strong>";
		},
		error: function() {
			alert("no pude completar la comunicacion!!");
		},
		complete: function() {
			console.log("Ya termine!!");
		}
	});

}

console.log("JavaScript Listo");