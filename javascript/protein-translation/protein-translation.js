export function translate(str) {
    if (str == undefined) return [];
    var rnaObject = {
        AUG: 'Methionine',
        UUU: 'Phenylalanine',
        UUC: 'Phenylalanine',
        UUA: 'Leucine',
        UUG: 'Leucine',
        UCU: 'Serine',
        UCC: 'Serine',
        UCA: 'Serine',
        UCG: 'Serine',
        UAU: 'Tyrosine',
        UAC: 'Tyrosine',
        UGU: 'Cysteine',
        UGC: 'Cysteine',
        UGG: 'Tryptophan',
        UAA: 'STOP',
        UAG: 'STOP',
        UGA: 'STOP'
    }

    var strList = str.match(/.{3}/g);
    var newstr = []
    for (let rvalue of strList) {
        if (rnaObject[rvalue] == undefined) throw new Error('Invalid codon')
        if (rnaObject[rvalue] == 'STOP') break;
        else newstr.push(rnaObject[rvalue])
    }
    return newstr;

}

