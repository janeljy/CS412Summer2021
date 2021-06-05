function cube(x) {
    return x*x*x;
}

// test
// console.log(`${cube(3)}`)

var arr = [1,2,3,4,5,6,7];
const map = arr.map(x => cube(x));
// console.log(map)
