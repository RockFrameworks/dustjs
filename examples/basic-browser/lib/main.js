var json = {
  "languages": [
    {
      "name": "HTML",
      "creators": ["Tim Berners Lee"]
    },
    {
      "name": "CSS",
      "creators": ["Håkon Wium Lie", "Bert Bos"]
    },
    {
      "name": "JavaScript",
      "creators": ["Brendan Eich"]
    },
    {
      "name": "Dust",
      "creators": ["akdubya"]
    }
  ]
};
dust.render("views/hello", json, function(err, out) {
	if (err)
		console.error(err);
	document.getElementsByTagName('body')[0].innerHTML = out;
});