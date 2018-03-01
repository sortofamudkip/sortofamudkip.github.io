var output =
	'<ul class = "nav">' +
	'<li class="nav"><a href="index.htm"><span class="lang eng">Home</span><span class="lang tw">首頁</span></a></li>' +
	'<li class="nav"><a href="asym.htm"><span class="lang eng">Asymptotic Analysis</span><span class="lang tw">時間複雜分析</span></a></li>' +
	'<li class="nav"><a href="#stack"><span class="lang eng">Stack &amp; Queue</span><span class="lang tw">堆疊 &amp; 佇列</span></a></li>' +
	'<li class="nav"><a href="#LL"><span class="lang eng">Linked List</span><span class="lang tw">連結串列</span></a></li>' +
	'<li class="nav"><a href="#sort"><span class="lang eng">Sorting</span><span class="lang tw">排序</span></a></li>' +
	'<li class ="" style="float:right"> <button class="nav" type="button" onclick="openNav()">' +
	'<span class="lang eng">About</span> <span class="lang tw">關於</span>' + 
	'</button> </li>' +
	'<li class ="" style="float:right"> <button class="nav" type="button" onclick="/*switch_lang(\'tw\')*/">' +
	'<span class="lang eng">Chinese (WIP!)</span> <span class="lang tw">中文</span>' +
	'</button> </li>' +
	'<li class="" style="float:right"> <button class = "nav" type="button" onclick="switch_lang(\'eng\')">' +
	' <span class="lang eng">English</span> <span class="lang tw">英文</span> \
	  </button> </li> \
	</ul>	\
	<div id="mySidenav" class="sidenav"> \
	  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> \
	  <div style="padding-left: 20px; word-wrap: normal;"> \
	  	<h3>About the dev</h3> \
	  	<img src="kippp.jpg"> \
	  	<p> \
	  		Jake (馮永輝) is a second year CS student at NTU.  \
	  	</p> \
	  	<p>\
	  		He is also probably depressed.\
	  	</p>\
	  	<p>\
	  		He also wants a job/internship. Maybe you should help him out.\
	  	</p>\
	    <div><a href="https://fthmb.tqn.com/hIWmQMsJPN3j_eFPrSPVVse_52Q=/2121x1414/filters:fill(auto,1)/GettyImages-185002046-5772f4153df78cb62ce1ad69.jpg">Help me out</a></div>\
	    <div><a href="https://www.wikihow.com/Be-Generous">Don\'t help me out</a></div>\
	  </div>\
	</div>\
\
	<script type="text/javascript">\
		function openNav() {\
		    document.getElementById("mySidenav").style.width = "250px";\
		}\
		function closeNav() {\
		    document.getElementById("mySidenav").style.width = "0px";\
		}\
	</script>\
	';

document.write(output);