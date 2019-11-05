function getQuantity(){
				var form = document.forms["passerrating"];
				var comp = form.elements["comp"].value;
				var att = form.elements["att"].value;
				var td = form.elements["td"].value;
				var yd = form.elements["yd"].value;
				var intc = form.elements["int"].value;

				var a = ((comp / att) - .3) * 5;
				var b = ((yd / att) - 3) * .25;
				var c = (td / att) * 20;
				var d = 2.375 - ((intc / att) * 25);

				var pr = ((a + b + c + d) / 6) * 100;

				return pr;
}
