//https://www.hackerrank.com/challenges/utopian-tree/problem

n = 5;
console.log(utopianTree(n));

function utopianTree(n) {
    // Write your code here
    const results = [];
    for (let i = 0; i < n + 1; i++) {
        if(i==0) results.push(1);
        else if(i % 2 == 0) results.push(results[i-1] + 1)
        else results.push(2 * results[i-1])
        
    }

    return results[results.length - 1];

}