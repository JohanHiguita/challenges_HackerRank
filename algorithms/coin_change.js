//https://www.hackerrank.com/challenges/coin-change/problem

c =[1,2,5];
n = 12;
 res = getWays(n,c);

console.table(res);

function getWays(n, c) {
  let combinations = new Array(n+1);
  combinations = combinations.fill(0);
  combinations[0] = 1;

  for (let i = 0; i < c.length; i++) {
    const currentCoin = c[i];
    for (let amount = 0; amount < combinations.length; amount++) {

        if (amount >= currentCoin) {
            combinations[amount] += Number( combinations[amount - currentCoin]);
        }
    }
  }

  return combinations[n];
}
