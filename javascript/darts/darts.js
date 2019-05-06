export function solve(x, y, dist) {
    if (typeof x == 'string') return null;
    if (typeof y == 'string') return null;
    dist = Math.sqrt((x ** 2) + (y ** 2))

    if (dist > 10) return 0;
    if (dist <= 1) return 10;
    if (dist <= 5) return 5;
    if (dist <= 10) return 1;
    if (dist == undefined) return '';

}