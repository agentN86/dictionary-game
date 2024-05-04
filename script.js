var words = ["delight", "erupt", "revolt"]
var dictionary = {
    "delight": {
        "definition": "great pleasure or satisfaction",
        "similar": ["delectation", "joy", "kick", "manna", "pleasure", "treat"]
    },
	"erupt": {
		"definition": "to burst forth; emerge with a sudden, often violent, rush",
		"similar": ["break out", "burst", "explode", "flame", "flare", "go off", "belch",
		"disgorge", "eject", "expel", "jet", "spew", "spout", "spurt"]
	},
	"revolt": {
		"definition": "to throw off allegiance to a ruler or government; a renouncing of allegiance",
		"similar": ["insurrection", "muntiny", "rebellion", "revolution", "uprising"]
	}
}

var lives = 6

var word = words[Math.floor(Math.random()*words.length)]
document.getElementById('word').innerText = word
document.getElementById('definition').innerText = dictionary[word].definition

function loseHeart() {
	document.getElementById('heart' + lives).src = "./assets/heartdead.png"
	lives--

	document.body.classList = "shake"
	setTimeout(function() {
		document.body.classList = ""
	}, 100)
}

document.getElementById('gamesBTN').onclick = function() {
	loseHeart()
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