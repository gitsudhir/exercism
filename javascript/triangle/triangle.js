export function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.kind = function () {

        if (this.a <= 0 || this.b <= 0 || this.c <= 0) throw new Error('illegal')
        if (this.a + this.b == this.c) return 'degenerate';
        if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) throw new Error('illegal');
        if (this.a == this.b && this.a == this.c) return 'equilateral';
        if (this.a == this.b || this.a == this.c || this.b == this.c) return 'isosceles';
        return 'scalene';

    }
}