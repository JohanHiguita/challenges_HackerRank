//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const x = 1
const y = 3
const z = 2

console.log(catAndMouse(x,y,z));
function catAndMouse(x, y, z) {
    
    const distA = Math.abs( x - z);
    const distB = Math.abs( y - z);

    if(distA > distB) return "Cat B";
    else if(distA < distB) return "Cat A";
    else return "Mouse C"

}