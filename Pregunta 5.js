function salario() {
	var anual, preguntaa, preguntab, sip, six, sueldoanual, sueldoporano, sueldoporaño;
	document.write("Un profesor tiene un salario inicial de S/. 1400 soles, y recibe un incremento de 10% anual durante 6 a�os",'<BR/>');
	document.write("¿Cual es su salario al cabo de 6 años?",'<BR/>');
	document.write("¿Que salario ha recibido en cada uno de los 6 años?",'<BR/>');
	document.write("Resolver.",'<BR/>');
	document.write("  1.- si",'<BR/>');
	document.write("  2.- no",'<BR/>');
	do {
		sip = prompt();
		if (sip<1 || sip>2) {
			document.write("Valor incorrecto solo 1 o 2. ",'<BR/>');
		}
	} while (!(sip>=1 && sip<=2));
	if (sip==2) {
		document.write("Esta bien no lo resolvere",'<BR/>');
	}
	if (sip==1) {
		sueldoporano = 1400*12;
		sueldoanual = ((16800*10)/100);
		anual = sueldoporano*6;
		six = sueldoanual*6;
		preguntaa = anual+six;
		preguntab = sueldoporano+sueldoanual;
		document.write("Salario acabo de 6 años:S/",preguntaa,'<BR/>');
		document.write("Salario acabo un año:S/",preguntab,'<BR/>');
	}
}

