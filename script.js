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
var gooberlose = true

var word = words[Math.floor(Math.random()*words.length)]
document.getElementById('word').innerText = word
document.getElementById('definition').innerText = dictionary[word].definition

function begin() {
	document.getElementById('start').style.display = "none"
	document.getElementById('gameplay').style.display = "block"
}

function loseHeart() {
	if (lives == 1 && gooberlose == true) {
		document.body.innerHTML = `
		<style>
		body {
		  margin: 0;
		  overflow: hidden;
		}
		
		video {
		  width: 100%;
		  height: 100vh;
		  object-fit: cover;
		}
	  </style>
	  <audio autoplay><source type="audio/mp3" src="./assets/glass_break.mp3"></audio>
	  <video autoplay>
		<source src="./assets/gameover.mp4" type="video/mp4">
	  </video>
		`

		setTimeout(function() {
			document.body.innerHTML = `
				<style>
					body {
						background-color: black;
						color: white;
						transition: 1s;
					}
				</style>
				<h1>your dead :(</h1>
				<button onclick="location.reload()">let me try again!</button>
			`
		}, 4000)
	}
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