function salariominimo() {
	var bono, puntosdedesempeno, puntosdedesempeno, salario;
	document.write("Ingrese puntos de desempeno");
	puntosdedesempeno = prompt();
	// Salario minimo s/930
	if (puntosdedesempeno>20 && puntosdedesempeno<100) {
		bono = ((930*10)/100);
		salario = bono+930;
	}
	if (puntosdedesempeno>101 && puntosdedesempeno<200) {
		bono = (930/2);
		salario = bono+930;
	}
	if (puntosdedesempeno>=201) {
		bono = 930;
		salario = bono+930;
	}
	document.write("El bono es S/",bono,'<BR/>');
	document.write("Salario a cobrar S/",salario,'<BR/>');
}

