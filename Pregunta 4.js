function operacionescon2numeros() {
	var n1, n2, opcion, resultado;
	document.write("Numero a operar:");
	n1 = Number(prompt());
	document.write("Numero a operar:");
	n2 = Number(prompt());
	document.write(" 1: Suma",'<BR/>');
	document.write(" 2: Resta",'<BR/>');
	document.write(" 3: Multiplicacion",'<BR/>');
	document.write(" 4: Division",'<BR/>');
	document.write("Elige la operacion:");
	opcion = prompt();
	resultado = 0;
	if (opcion==1) {
		resultado = n1+n2;
	}
	if (opcion==2) {
		resultado = n1-n2;
	}
	if (opcion==3) {
		resultado = n1*n2;
	}
	if (opcion==4) {
		resultado = n1/n2;
	}
	document.write("Valor de la operacion: ",resultado,'<BR/>');
}

