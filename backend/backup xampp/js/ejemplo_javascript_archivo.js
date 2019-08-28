console.log("Cargando codigo JavaScript");

function getData(){
	var valor1 = document.getElementById('otroNombre').value;
	var valor2 = document.getElementById('valor2').value;
	
	console.log("Envio valor1: " + valor1);
	console.log("Envio valor2: " + valor2);
	
	$.ajax({
		beforeSend : function (){
			console.log("Espera un momento....");
		},
		headers: { 
	        'Accept': 'application/json',
	        'Content-Type': 'application/json' 
	    },
        url: '/cgi-bin/recibir_datos_js_archivo.pl?',
        data: {"valor1" : valor1, "valor2" : valor2},
		dataType: "json",
		success: function (responseData) {
            console.log("Me llego: " + JSON.stringify(responseData) );
            console.log("Me llego1: " + responseData.llaveprimaria );
            console.log("Me llego2: " + responseData.llego2 );
            console.log("Me llego3: " + responseData.respuesta );
			document.getElementById("aqui_va_la_respuesta").innerHTML = "<strong style='color:blue'>" + responseData.respuesta + "</strong>";
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