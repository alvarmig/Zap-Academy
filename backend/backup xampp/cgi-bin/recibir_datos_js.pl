#!"C:\xampp\perl\perl\bin\perl.exe"

use CGI qw();
my $c = CGI->new;
my @arreglo = ["hola", "mi nombre es"];
# print $c->header('text/plain');
print "Content-type: application/json; charset=iso-8859-1\n\n";

my $valor1 = $c->param('valor1');
my $valor2 = $c->param('valor2');

my $respuesta = "No entendi lo que dijiste";
if($valor1 =~ /hola/i){
	$respuesta = "Que tal, buenos dias :), como te llamas?";
}
if($valor1 =~ /mi nombre es/i){
	my $nombreUsuario = $valor1;
	$nombreUsuario =~ s/mi nombre es//i; 
	$respuesta = "mucho gusto " . $nombreUsuario . ", yo soy el servidor";
} 
print <<HASTA_EL_FINAL;
{
	"llaveprimaria": "${valor1}",
	"llego2": "${valor2}", 
	"respuesta" : "${respuesta}"
}
HASTA_EL_FINAL
