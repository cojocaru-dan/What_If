// WRITE YOUR CODE BELOW THIS LINE
const favMovies = [
	{
		title: "Forrest Gump",
		year: 1994,
		rating: 8.8,
		description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
		directors: ["Robert Zemeckis"],
		writers: ["Winston Groom", "Eric Roth"],
		stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
		genres: ["Drama", "Comedy", "Romance"]
	},
	{
		title: "The Silence of the Lambs",
		year: 1991,
		rating: 8.6,
		description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
		directors: ["Jonathan Demme"],
		writers: ["Thomas Harris", "Ted Tally"],
		stars: ["Jodie Foster", "Anthony Hopkins", "Lawrence Bonney"],
		genres: ["Thriller", "Horror", "Mystery"]
	},
	{
		title: "Se7en",
		year: 1995,
		rating: 8.6,
		description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
		directors: ["David Fincher"],
		writers: ["Andrew Kevin Walker"],
		stars: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
		genres: ["Thriller", "Mystery", "Crime"]
	},
	{
		title: "The Usual Suspects",
		year: 1995,
		rating: 8.5,
		description: "The authorities in New York arrest five guys with one of the most dubious reputations, suspected of having participated in the robbery of a truck. The police investigations will trigger a carousel of violence that will end in a carnage with 27 dead bodies and a quantity of cocaine worth 91 million dollars missing.",
		directors: ["Bryan Singer"],
		writers: ["Christopher McQuarrie"],
		stars: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
		genres: ["Mystery", "Crime", "Drama"]
	}
];

for (const movie of favMovies) {
	console.log(movie["title"]);
} 

for (let i = 0; i < favMovies.length; i++) {
	let movie = favMovies[i];
	console.log(movie.title);
}

let averageRate = 0;
for (const movie of favMovies) {
	averageRate += movie.rating;
}
averageRate /= 4;
console.log(averageRate);

let newestMovie = favMovies[0];

for (let i = 1; i < favMovies.length; i++) {
	let movie = favMovies[i];
	if (movie.year > newestMovie.year) {
		newestMovie = movie;
	}
}

console.log(newestMovie.title);

let starsByMovies = "";

for (const movie of favMovies) {
	starsByMovies += (movie.title + ": ");
	for (const character of movie.stars) {
		starsByMovies += (character + " "); 
	}
	starsByMovies += "\n";
}

console.log(starsByMovies);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "averageRate", content: averageRate, type: "number"},
		{name: "newestMovie", content: newestMovie, type: "object"},
		{name: "starsByMovies", content: starsByMovies, type: "string"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
