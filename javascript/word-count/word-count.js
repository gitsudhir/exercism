export class Words {
    constructor() { }
    count(str) {
        let obj = {}
        let arr = str.split(/[\n\t\s]/gi);
        arr.forEach(x => {
            obj[x.toLocaleLowerCase()] = str.match(new RegExp(`\\b${x}\\b`, 'gium')).length;
        })
        delete obj[""];
        return obj;
    }
}