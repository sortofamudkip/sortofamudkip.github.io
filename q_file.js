function fill_bigO(index, f, oper, g) {
	var output =
	"<span class='expression'>"
	+ " \\(f(n)\\) "
	+ "<button onclick=\"toggle_TF(this, 'bigO_m"+index+"', 'bigO_no"+index+"')\" class='isequal'>=</button> "
	+ " \\( " + oper +"(g(n))\\) "
	+ " </span>"
	+ "\\(f(n) = " + f + "\\), \\(g(n) =" + g + "\\)"
	+ "<form id='bigO_m" + index + "' class='ansform'>"
	+ "\\(c\\): <input type='text' class='c_n'>"
	+ " \\(n_0\\): <input type='text' class='c_n'>"
	+ "</form>"
	+ "<button onclick=\"check_bigO('bigO_m"+index+"',bigO_f"+index+",'bigO_no"+index+"')\""
	+ " class=c_nbutton> Check </button>"
	+ "<span id=\'bigO_no"+index+"' class='result'></span>";
	return output;
}

function fill_theta(index, f, g) {
	var output =
	"<span class='expression'>"
	+ " \\(f(n)\\) "
	+ "<button onclick=\"toggle_TF(this, 'theta_m"+index+"', 'theta_no"+index+"')\" class='isequal'>=</button> "
	+ " \\(\\Theta(g(n))\\) "
	+ " </span>"
	+ "\\(f(n) = " + f + "\\), \\(g(n) =" + g + "\\)"
	+ "<form id='theta_m" + index + "' class='ansform'>"
	+ "\\(c\\): <input type='text' class='c_n' style='margin-right:10px;'> "
	+ "\\(d\\): <input type='text' class='c_n'> "
	+ "\\(n_0\\): <input type='text' class='c_n'>"
	+ "</form>"
	+ "<button onclick=\"check_theta('theta_m"+index+"',theta_f"+index+",'theta_no"+index+"')\""
	+ " class=c_nbutton> Check </button>"
	+ "<span id=\'theta_no"+index+"' class='result'></span>";
	return output;
}

function fill_little(index, f, oper, g) { //no c, n0
	var output =
	"<span class='expression'>"
	+ " \\(f(n)\\) "
	+ "<button onclick=\"toggle_TF(this, 'little_m"+index+"', 'little_o"+index+"')\" class='isequal'>=</button> "
	+ " \\( " + oper +"(g(n))\\) "
	+ " </span>"
	+ "\\(f(n) = " + f + "\\), \\(g(n) =" + g + "\\)"
	+ "<form id='little_m" + index + "' class='ansform' style='display:none;'>"
	+ "\\(c\\): <input type='text' class='c_n'>"
	+ " \\(n_0\\): <input type='text' class='c_n'>"
	+ " dummy: <input type='text' class='c_n'>"
	+ " dummy2: <input type='text' class='c_n'>"
	+ "</form>"
	+ "<button onclick=\"check_little('little_m"+index+"',"+index+",'little_o"+index+"')\""
	+ " class=c_nbutton> Check </button>"
	+ "<span id=\'little_o"+index+"' class='result'></span>";
	return output;
}

bigO_q = [ // O and Omega
		["n^2", "O", "7n^2"], 
		["10", "O", "2n-1"], 
		["5+\\frac{1}{2}n^2", "O", "3n"],
		["7", "O", "1"],
		["n!", "O", "2^n"],

		["(n+1)^3", "O", "5n^3"],
		["(\\log_2n)^2", "O", "7\\log_2n"],
		["1+2+...+n", "\\Omega", "n^2"],
		["5n^2+7n+2", "\\Omega", "1"],
		["5n^2+7n+2", "\\Omega", "n-1"],
		["\\sqrt{n}", "\\Omega", "n"],
		["2", "\\Omega", "800"]
	 ];

theta_q = [ // Theta
		["2n + 3", "n + 7"],
		["5", "8"],
		["n\\log_2n+n", "n\\log_2n"],
		["\\log_2{n!}", "\\log_2{n^n}"],
		["n^2+3n+7", "2n-20"]
	];

little = [ //little o, little omega
		["(n+1)^3", "o", "(n+2)^3"],
		["2^n", "o" ,"2^n+5n^2"],
		["n!", "o", "n^n"],
		["\\sqrt{n^2+2n}", "\\omega", "\\sqrt{n+1}-\\sqrt{n}"],
		["(\\log_3n)^7", "\\omega", "(\\log_4n)^7"],
		["((\\frac{n}{n+1})^n-\\frac{1}{e})n", "\\omega", "3"]
]

var to_write = "";

for (var i = 0; i < bigO_q.length; i++) {
	to_write += "<li> " + fill_bigO(i+1, bigO_q[i][0], bigO_q[i][1], bigO_q[i][2]) + " </li>";
}

for (var j = 0; j < theta_q.length; j++) {
	to_write += "<li> " + fill_theta(j+1, theta_q[j][0], theta_q[j][1]) + " </li>";
}

for (var k = 0; k < little.length; k++) {
	to_write += "<li> " + fill_little(k+1, little[k][0], little[k][1], little[k][2]) + " </li>";
}
document.write(to_write);