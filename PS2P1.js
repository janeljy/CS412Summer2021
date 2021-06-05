// PS2 P1
// Write two generators that together implement a series of even Fibonacci numbers.
// The first generator should return the series of fibonacci numbers starting from 0.
// The series F is defined as F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)

function* series_F (x=0) {
    let [Fn_1, Fn_2, Fn] = [x, x+1, 0]; // initially [0, 1, 0]
    while (true) {
        if (Fn == 0) {  // series start from 0, 1, ...
            yield 0;
            yield 1;
        }
        Fn = Fn_1 + Fn_2;
        Fn_1 = Fn_2;
        Fn_2 = Fn;
        yield Fn;
    }
}

// test
// myFibs = series_F();
// let count = 6;
// while (count-- > 0) {
//     console.log(myFibs.next().value)
// }

// The second generator

myFibs=series_F(0); // use first generator

function* find_even () {
    num = myFibs.next().value;  // use the first generator to obtain the next number in the sequence

    if (num == 0) {  // series start from 0
        num = myFibs.next().value;
        yield 0;
    }
    while (true){
        while (num % 2 != 0) {
            num = myFibs.next().value;  // reject and ask for the next if num is odd
        }
        result = num;
        num = myFibs.next().value;  // point to the next num
        yield result;   // Once an even is obtained, emit
    }
}


// print out the first 6 even Fibonacci numbers.
evenFibs = find_even();
let count = 6;
while (count-- > 0) {
    console.log(evenFibs.next().value)
}
