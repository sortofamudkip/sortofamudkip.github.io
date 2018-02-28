var A = document.getElementsByClassName("lang");
for (var i = 0; i < A.length; i++) {
	if (A[i].className.indexOf("lang eng") == -1) A[i].style.display = "none";
}
//toggle language
curr_lang = "eng";
function switch_lang(lang) {
	if (curr_lang == lang) return; //do nothing
	if (curr_lang == "eng") curr_lang = "tw";
	else curr_lang = "eng";
	var A = document.getElementsByClassName("lang");
	for (var i = 0; i < A.length; i++) {
		if (A[i].className.indexOf("lang " + lang) != -1) {
			if (A[i].tagName == "SPAN") A[i].style.display = "inline";
			else A[i].style.display = "block";
		}
		else A[i].style.display = "none";
	}
}
