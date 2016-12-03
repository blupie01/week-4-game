var heroStats = {bastion: {name: "Bastion",
						   health: 300,
						   attack: 12,
						   counterAttack: 18,
						   img: "bastion.png"},
				reaper: {name: "Reaper",
						  health: 250,
						  attack: 10,
						  counterAttack: 15,
						 img: "reaper.png"},
				tracer: {name: "Tracer",
						  health: 200,
						  attack: 15,
						  counterAttack: 10,
						 img: "tracer.png"},
				widow: {name: "Widow",
						 health: 180,
						 attack: 20,
						 counterAttack: 12,
						img: "widow.png"}
				};

var heroHealth;
var enemyList;
var enemyHealth;

//adds hero pictures 
function loadHeroPic() {
	$("#chooseHero").append("<h3 id='heroList'>Choose a hero</h3>");
	for (var key in heroStats) {
		var obj = heroStats[key];
		var heroName = obj["name"];
		var heroPic = obj["img"];
		var heroImage = $("<img src= assets/images/" + heroPic + ">").attr(
						"data-hero_name", heroName).addClass(key);
		$("#chooseHero").append(heroImage);
	}
}

//choose 1 hero
function chooseHero() {
	$(".bastion, .reaper, .tracer, .widow").on("click", function(){
		var imgClass = $(this).data("hero_name");
		console.log(imgClass);

		if (imgClass == "Bastion") {
			$("#hero").append(this);
			$("#heroList").replaceWith("<h3>Enemies to Attack</h3>");
			$(".reaper, .tracer, .widow").on("click", function(){
				$("#defender").append(this);
			});
		}
	});
}

function startGame() {
	loadHeroPic();
	chooseHero();

}

startGame();

// $("#attack").on("click", function(){

// });
