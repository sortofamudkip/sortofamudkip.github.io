function move_mudkip(name) {
  var elem = document.getElementById(name);   
  var pos = 0;
  setInterval(frame, 5);
  function frame() {
    if (pos == window.innerWidth) {
      pos = -50;
      elem.style.left = '-50px';
    } else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
}
move_mudkip("animate");
