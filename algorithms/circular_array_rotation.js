/*
https://www.hackerrank.com/challenges/circular-array-rotation/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign
*/

const a = ["a", "b", "c", "d"]
const k = 6
const q = [0,3]

const t = circularArrayRotation(a, k, q)
console.log(t)

function circularArrayRotation(a, k, queries) {
    
    const arr_l = a.length 
    const steps = k > arr_l ? k % arr_l : k
    const last_arr = a.slice(-steps)
    const init_arr = a.slice(0,(arr_l - steps))
    const circuled_arr = last_arr.concat(init_arr)
    const output = queries.map((it) => circuled_arr[it] )
    return output

}
