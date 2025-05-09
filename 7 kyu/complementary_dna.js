function dnaStrand(dna){
    let res = []
    dna = dna.split('')
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                res += 'T'
                break
            case 'T':
                res += 'A'
                break
            case 'C':
                res += 'G'
                break
            case 'G':
                res += 'C'
                break
        }
    }
    return res
}