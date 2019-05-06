
export function QueenAttack(board = { white: [0, 3], black: [7, 3] }) {
    this.white = board.white,
        this.black = board.black
    try { 1 } finally {
        if (this.white[0] == this.black[0] && this.white[1] == this.black[1]) {
            throw new Error('Queens cannot share the same space');
        }
    }
    this.toString = () => {
        let startBoard = []
        for (let i = 0; i < 8; i++) {
            startBoard.push((new Array(8).fill('_')))
        }
        startBoard[this.white[0]][this.white[1]] = 'W'
        startBoard[this.black[0]][this.black[1]] = 'B'
        startBoard[7] = [...startBoard[7], '\n']
        var output = []
        for (let data of startBoard) {
            output.push(data.join(' '));
        }
        return output.join('\n');
    },
        this.canAttack = () => {
            if (this.white[0] == this.black[0]) return true;
            if (this.white[1] == this.black[1]) return true;
            if (Math.abs(this.white[0] - this.black[0]) == Math.abs(this.white[1] - this.black[1])) return true;
            return false;
        }
}