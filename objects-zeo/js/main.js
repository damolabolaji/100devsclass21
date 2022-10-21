//Create a stopwatch object that has four properties and three methods
let stopWatch = {
    color: 'white',
    shape: 'round',
    brandName: 'Adidas',
    type: 'digital',
    describecolor(){
        return `watch is ${this.color}, `
    },
    describeshape(){
        return `watch is ${this.shape}, `
    },
    describebrand(){
        return `watch is ${this.brandName}, `
    }
}

console.log(stopWatch.describebrand())