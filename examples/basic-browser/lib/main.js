var json = {
	"level" : "master",
	"age" : 27,
	"starfighterRentalAge" : 25,
	"level" : "padawan",

	"bilbosAge" : 50,
	"gandalfsAge" : 12345,

	"guests" : ["Alice", "Bob", "Charlie"],

	"testEnabled" : "bunnies",

	"flavors": [
	    { "name": "red bean" },
	    { "name": "green tea" },
	    { "name": "mango" },
	    { "name": "peanut" }
	],
	
	"progress": 70,
	
	
};
dust.render("views/hello", json, function(err, out) {
	if (err)
		console.error(err);
	document.getElementsByTagName('body')[0].innerHTML = out;
});
