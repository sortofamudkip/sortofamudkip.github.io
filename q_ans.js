function log2(y) {
  return Math.log(y) / Math.log(2);
}

//note: n0 MUST be >= 1 and c MUST be > 0
function bigO_f1(exists, c, n0) {return exists && 1/7 <= c && n0 >= 1;}
function bigO_f2(exists, c, n0) {return exists && n0 >= 1 && 10 <= c*(2*n0-1);}
function bigO_f3(exists, c, n0) {return !exists;}
function bigO_f4(exists, c, n0) {return exists && c >= 7 && n0 >= 1;}
function bigO_f5(exists, c, n0) {return !exists;}
function bigO_f6(exists, c, n0) {return exists && n0 >= 1 && c >= (n0+1)*(n0+1)*(n0+1) / (5*n0*n0*n0);}
function bigO_f7(exists, c, n0) {return !exists;}
function bigO_f8(exists, c, n0) {return exists && n0 >= 1 && 0 < c && c <= n0*(n0+1)/(2*n0*n0);}
function bigO_f9(exists, c, n0) {return exists && n0 >= 1 && 0 < c && c <= 5*n0*n0 + 7*n0 + 2;}
function bigO_f10(exists, c, n0) {return exists && n0 > 1 && 0 < c && c<= (5*n0*n0 + 7*n0 + 2)/(n0-1);}
function bigO_f11(exists, c, n0) {return !exists;}
function bigO_f12(exists, c, n0) {return exists && n0 >= 1 && 0 < c && c <= 1/400;}

function theta_f1(exists, c, d, n0) {return exists && n0 >= 1 && 0 < c && c <=(2*n0+3)/(n0+7) && d >=(2*n0+3)/(n0+7);}
function theta_f2(exists, c, d, n0) {return exists && n0 >= 1 && 0 < c && c <= 5/8 && d >=5/8;}
function theta_f3(exists, c, d, n0) {
	if (!exists || n0 <= 1 || c <= 0 || d <= 0) return false; //if n0 == 1 then 0 <= 1 <= 0
	return c <= 1 + 1/log2(n0) && 1 + 1/log2(n0) <= d;
}
function theta_f4(exists, c, d, n0) {return !exists;}
function theta_f5(exists, c, d, n0) {return !exists;}

function validate_c(str) {
	var check_str = " 0123456789+-*/.()";
	for (var i = 0; i < str.length; i++) {
		if (check_str.indexOf(str[i]) == -1) return false;
	}
	return !isNaN(eval(str)) && isFinite(eval(str));
}
function validate_n0(str) {
	var check_str = " 0123456789+-*()"; //guaranteed to be int, can't by infinity
	for (var i = 0; i < str.length; i++) {
		if (check_str.indexOf(str[i]) == -1) return false;
	}
	return !isNaN(eval(str));
}
function check_bigO(form_name, fname, result_name) { 
	var the_form = document.getElementById(form_name);
	var c = the_form.elements[0].value;
	var n0 = the_form.elements[1].value;
	var valid_c = validate_c(c), valid_n0 = validate_n0(n0);
	if (!valid_c || !valid_n0) {
		if (!valid_c) the_form.elements[0].style["background-color"] = "#f3ffa0";
		else the_form.elements[0].style["background-color"] = "white";
		if (!valid_n0) the_form.elements[1].style["background-color"] = "#f3ffa0";
		else the_form.elements[1].style["background-color"] = "white";
		response = "&#x2757; invalid input";
	}
	/*
		NOTE: we can check if the user inputted "exists" or not 
		depending on whether the text was greyed out or not.
	*/
	else { 
		if (fname(!the_form.elements[0].disabled, eval(c), eval(n0))) {
			the_form.elements[0].style["background-color"] =
			the_form.elements[1].style["background-color"] = "lightgreen";
			response = "&#x2705;";
		}
		else {
			the_form.elements[0].style["background-color"] =
			the_form.elements[1].style["background-color"] = "#ff4949";
			response = "&#x274C;";
		}
	}
	document.getElementById(result_name).innerHTML = response;
}

function check_theta(form_name, fname, result_name) { 
	var the_form = document.getElementById(form_name);
	var c = the_form.elements[0].value;
	var d = the_form.elements[1].value;
	var n0 = the_form.elements[2].value;
	var valid_c = validate_c(c), valid_d = validate_c(d), valid_n0 = validate_n0(n0);
	if (!valid_c || !valid_n0 || !valid_d) {
		if (!valid_c) the_form.elements[0].style["background-color"] = "#f3ffa0";
		else the_form.elements[0].style["background-color"] = "white";
		if (!valid_d) the_form.elements[1].style["background-color"] = "#f3ffa0";
		else the_form.elements[1].style["background-color"] = "white";
		if (!valid_n0) the_form.elements[2].style["background-color"] = "#f3ffa0";
		else the_form.elements[2].style["background-color"] = "white";		
		response = "&#x2757; invalid input";
	}
	/*
		NOTE: we can check if the user inputted "exists" or not 
		depending on whether the text was greyed out or not.
	*/
	else { 
		if (fname(!the_form.elements[0].disabled, eval(c), eval(d), eval(n0))) {
			the_form.elements[0].style["background-color"] =
			the_form.elements[1].style["background-color"] =
			the_form.elements[2].style["background-color"] = "lightgreen";
			response = "&#x2705;";
		}
		else {
			the_form.elements[0].style["background-color"] =
			the_form.elements[1].style["background-color"] =
			the_form.elements[2].style["background-color"] = "#ff4949";
			response = "&#x274C;";
		}
	}
	document.getElementById(result_name).innerHTML = response;
}

little_ans = [
	false,
	false, 
	true,
	true,
	false,
	true
];

function check_little(form_name, ans_index, result_name) { 
	var the_form = document.getElementById(form_name);
	if (!the_form.elements[0].disabled == little_ans[ans_index-1]) { 
		response = "&#x2705;";
	}
	else {
		response = "&#x274C;";
	}
	document.getElementById(result_name).innerHTML = response;
}

function toggle_TF(self, boxes, result) {
	var meow = document.getElementById(boxes);
	var elems = meow.elements;
	if (self.innerHTML == "=") {
		self.innerHTML = "&#x2260";
		elems[0].value = elems[1].value = "1";
		meow.style.display = "none";
		elems[0].disabled = elems[1].disabled = true;
		if (elems.length > 2) {
			elems[2].value = "1";
			elems[2].disabled = true;
		}
	}
	else {
		self.innerHTML = "=";
		if (elems.length != 4) meow.style.display = "inline";
		elems[0].value = elems[1].value = "";
		elems[0].disabled = elems[1].disabled = false;
		if (elems.length > 2) {
			elems[2].value = "";
			elems[2].disabled = false;
		}		
	}
	//clear result regardless
	document.getElementById(result).innerHTML = "";
	elems[0].style["background-color"] = elems[1].style["background-color"] = "white";
	if (elems.length > 2) elems[2].style["background-color"] = "white";
}
