function rotateTheBox(box: string[][]): string[][] {
    const ROWS = box.length;
    const COLS = box[0].length;
    
    const res: string[][] = Array(COLS).fill(0)
        .map(() => Array(ROWS).fill('.'));
    
    for (let r = 0; r < ROWS; r++) {
        let i = COLS - 1;
        for (let c = COLS - 1; c >= 0; c--) {
            if (box[r][c] === '#') {
                res[i][ROWS - r - 1] = '#';
                i--;
            } else if (box[r][c] === '*') {
                res[c][ROWS - r - 1] = '*';
                i = c - 1;
            }
        }
    }
    return res;
}

let box: string[][] = [
    ['#', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '.', '*', '.']
];

console.log(rotateTheBox(box));