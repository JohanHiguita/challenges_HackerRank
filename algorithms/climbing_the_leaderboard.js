/* https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem */


const scores = [100,100,50,40,40,20,10];
const alice = [5,25,50,120];
const t = climbingLeaderboard(scores, alice);

console.log(t)


function climbingLeaderboard(scores, alice) {
    
    let out = [];
    
    //remove repeated values from scores
    const filtered_scores = scores.filter((a, b) => scores.indexOf(a) === b)

    alice.forEach(alice_score => {
        for (let i = 0; i < filtered_scores.length; i++) {
            /* if(alice_score <= filtered_scores[filtered_scores.length -1]) { } */
            if (alice_score >= filtered_scores[i]) {
                out.push(i+1)
                break;
            }else{
                if(alice_score <= filtered_scores[filtered_scores.length -1]) {
                    out.push(filtered_scores.length+1)
                    break; 
                }
            }
        }
    });

    return out;
}
