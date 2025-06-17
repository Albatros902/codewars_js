class Block{

    constructor(data){
        [this.width, this.length, this.height] = data
    }
    getWidth() {
        return this.width
    }
    getLength() {
        return this.length
    }
    getHeight() {
        return this.height
    }
    getVolume() {
        return this.width * this.length * this.height
    }
    getSurfaceArea() {
        let {w, l, h} = this
        return (w*l + l*h + h*w) * 2
    }

}

let block = new Block([71, 57, 87]);

console.log(block.getWidth())           // 2
console.log(block.getLength())          // 4
console.log(block.getHeight())          // 6
console.log(block.getVolume())          // 48
console.log(block.getSurfaceArea())     // 88