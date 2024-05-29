class Scrabble {
	// Write your implementation here
	pointsMap = {
		Q: 10,
		Z: 10,
		J: 8,
		X: 8,
		K: 5,
		F: 4,
		H: 4,
		V: 4,
		W: 4,
		Y: 4,
		B: 3,
		C: 3,
		M: 3,
		P: 3,
		D: 2,
		G: 2,
	};

	constructor(word = "") {
		this.word = word;
		this.points = this.score();
	}

	score() {
		this.points = 0;

		if (!this.word || !/^[A-Za-z]+$/.test(this.word)) return this.points;

		for (const char of this.word.split("")) {
			this.points += this.pointsMap[char.toUpperCase()] || 1;
		}

		return this.points;
	}
}
module.exports = Scrabble;
