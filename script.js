document.getElementById('gamesBTN').onclick = function() {
	var elements = document.getElementsByClassName('gamesTableTH')
	if (elements[0].style.display === "table-row") {
	  for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "none"
	  }
	} else {
	  for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "table-row"
	  }
	}
  }