#!"C:\xampp\perl\bin\perl.exe"

#/c/xampp/perl/bin/perl

use DBI;
use CGI qw();

my $c = CGI->new;

$ENV{'PATH'} .= ';C:\xampp\perl\bin';

my $mensaje = $c->param('mensaje');
##my $valor2 = $c->param('valor2');
my $respuesta = "No entendi lo que dijiste";

if($mensaje =~ /hola/i){
	$respuesta = "Que tal, buenos dias :), como te llamas?";
}
if($mensaje =~ /mi nombre es/i){
	my $nombreUsuario = $mensaje;
	$nombreUsuario =~ s/mi nombre es //i;
my $existeElnombreEnArchivo ="NO";
	# my $existeElnombreEnArchivo = buscarNombre($nombreUsuario);
	chomp(my $existeElnombreEnArchivo = qx(perl.exe recibir_datos_05_CRUD_operations.pl operacion=buscarNombre nombreUsuario=${nombreUsuario}));
	
	if($existeElnombreEnArchivo eq "SI"){
		$respuesta = "Otra vez por aca " . $nombreUsuario
		
	}else{
		$respuesta = "mucho gusto " . $nombreUsuario . ", yo soy el servidor";
		# escribe_en_archivo($nombreUsuario);
		qx(perl.exe c:/xampp/cgi-bin/recibir_datos_05_CRUD_operations.pl operacion=guardarNombre nombreUsuario=${nombreUsuario});
	}
}
   
print "Content-type: application/json; charset=iso-8859-1\n\n";

print <<HASTA_EL_FINAL;
{
	"la_respuesta_es": "${respuesta}",
}
HASTA_EL_FINAL
