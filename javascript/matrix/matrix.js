export function Matrix(str) {
    this.str = str;
    this.rows = this.str.split('\n').map( value=> value.split(' ').map( v=>+v))
    this.columns = this.rows[0].map((cell, index) => this.rows.map(row => row[index]));
}
