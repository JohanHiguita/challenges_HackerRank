
s= "SOSSPSSQSSOR"

marsExploration(s)

function marsExploration(s) {
    let pos = 0;
    let reps = 0;
    for (let char of s) {
        pos++;
        if(pos == 1){
            if (char != "S") reps ++;
        }else if(pos==2){
            if (char != "O") reps ++;
        }else{
            if (char != "S") reps ++
            pos=0;
        }        
    }
    return reps

}