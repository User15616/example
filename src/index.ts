
function fizzBuzz(num: number): string | number {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';

    return num;
}


const r1 = fizzBuzz(54);
const r2 = fizzBuzz(45);
const r3 = fizzBuzz(45);

console.log(r1, r2, r3);

function fn1(i: string) {
    const o = i + " fn1"
    return fn2(o);
}

function fn2(i: string) {
    const o = i + " fn2"
    return fn3(o);
}
function fn3(i: string) {
    return i + ' fn3';
}

let r = fn1('start');
console.log(r);