function fill_q(index, f, g) {
	var output = "<span class='expression'> \\(f(n)\\) "
	+ "<button onclick=\'toggle_TF(this, 'm" + index + "', no" + index +")\'"
	+ " class='isequal'>=</button> \\(O(g(n))\\) </span>"
	+ "\\(f(n) = " + f + "\\), \\(g(n) =" + g + "\\)"
	+ "<form id='m'" + index + " class='ansform'>"
	+ "\\(c\\): <input type='text' class='c_n'>"
	+ " \\(n_0\\): <input type='text' class='c_n'>"
	+ "</form>"
	+ "<button onclick=\"check('m"+index+"',f"+index+",'no"+index+"')\""
	+ "class=c_nbutton> Check </button>"
	+ "<span id=\'no"+index+"' class='result'></span>";
	return output;
	// var to_write = document.getElementById("q"+index);
	// to_write.innerHTML = output;		
}

console.log