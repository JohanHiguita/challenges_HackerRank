// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
const i = 20 
const j = 23
const k = 6
const test = beautifulDays(i,j,k)

console.log(test)

function beautifulDays(i, j, k) {
    const range_arr = Array.from(new Array(j-i+1), (val, index) => i + index);
    const out = range_arr.filter(num => {
        let reverse_num = parseInt(num.toString().split("").reverse().join(""));
        return Math.abs(num-reverse_num) % k == 0
    });
    return out.length
}