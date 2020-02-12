/* https://www.hackerrank.com/challenges/equality-in-a-array/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign */


const arr = [0,0,0,1,1,2,2,2,2,2,8,8,8,8,8,1,1,0,0,0,0,0,0];
const t = equalizeArray(arr);

console.log(t)


function equalizeArray(arr) {

	const reducer = arr.reduce((acc, curr) => {
        acc[curr] ? acc[curr] ++ : acc[curr] = 1;
        return acc
    }, {})
    
    const vals = Object.values(reducer);
    const repeated = Math.max(...vals);

    return arr.length - repeated
}
