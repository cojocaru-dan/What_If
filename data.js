// WRITE YOUR CODE BELOW THIS LINE


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
