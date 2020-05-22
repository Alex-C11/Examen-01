function vacuna() {
	var edadpersona, sexo;
	document.write("Edad de la persona",'<BR/>');
	edadpersona = prompt();
	document.write("Sexo de la persona",'<BR/>');
	document.write(" 1.-Masculino",'<BR/>');
	document.write(" 2.-Femenino",'<BR/>');
	do {
		sexo = prompt();
		if (sexo<1 || sexo>2) {
			document.write("Valor incorrecto solo 1 o 2. ",'<BR/>');
		}
	} while (!(sexo>=1 && sexo<=2));
	if (sexo==1) {
		if (edadpersona>=70) {
			document.write(("Se le aplicara la vacuna de tipo C"),'<BR/>');
		} else {
			if (edadpersona>=16) {
				document.write(("Se le aplicara la vacuna de tipo A"),'<BR/>');
			} else {
				document.write(("Se le aplicara la vacuna de tipo A"),'<BR/>');
			}
		}
	}
	if (sexo==2) {
		if (edadpersona>=70) {
			document.write(("Se le aplicara la vacuna de tipo C"),'<BR/>');
		} else {
			if (edadpersona>=16) {
				document.write(("Se le aplicara la vacuna de tipo B"),'<BR/>');
			} else {
				document.write(("Se le aplicara la vacuna de tipo A"),'<BR/>');
			}
		}
	}
}

