export function List(set = '') {
    this.set = set
}
List.prototype.compare = function ({ set = '' }) {
    if (this.set.length == set.length) {
        if ('' + this.set == '' + set) return 'EQUAL';
    } else if (this.set.length > set.length) {
        if (('' + this.set).indexOf('' + set) >= 0) return 'SUPERLIST';
    } else {
        if (('' + set).indexOf('' + this.set) >= 0) return 'SUBLIST';
    }
    return 'UNEQUAL';
}