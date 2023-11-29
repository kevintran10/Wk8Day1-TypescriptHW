// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: let a: number = 118

let b = 'Thieves';
// A: let b: string = 'Thieves'

let c = [true, false, false];
// A: let c: boolean[] = [true, false, false]

let d = {age: 29};
// A: let d = {
//     age: number
// }

let e = [3]
// A: let e: number[] = [3]

let f;
// A: let f: any

let g = []
// A: let g: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: there needs to be a releaseYear: {some number}

let prices = [100, 200, 300];
prices[0] = '$100';
// A: let prices: number[] = [100, 200, 300]
// prices[0] = 100

function myFunc(a: number, b: number): number {}
// A:the parameters need to be used within the {}