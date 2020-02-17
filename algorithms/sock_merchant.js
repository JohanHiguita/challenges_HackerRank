

function sockMerchant(n, ar) {
    const odds = []
    let pairs = 0
    ar.forEach(x => {
        if (odds.includes(x)){
            pairs++;
            //remove it
            const index = odds.indexOf(x);
            odds.splice(index,1);
        }else {
            odds.push(x)
        }

    });

    return pairs;

}