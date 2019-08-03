export class HighScores {
    constructor(input) {
        this.scores = [...input];
        this.latest = input[input.length - 1];
        this.personalBest = input.sort((a, b) => b - a)[0];
        this.personalTopThree = input.sort((a, b) => b - a).slice(0, 3)
    }
}
