function highestValuePalindrome(s, n, k) {

    const middle = Math.ceil((s.length)/2);
    let totalChanges = 0;
    const positionsToChange = [];
    let aux_s = s.split("");
    for (let i = 0; i < middle; i++) {
        if (s[i] !== s[s.length -1 -i]){
            totalChanges++;
            positionsToChange.push(i);
        }
        if(totalChanges > k) {
            return (-1);
        }
    }
    
    //return positionsToChange;
    let usedChanges = 0;
    for (const position of positionsToChange) {
        const highest = parseInt(aux_s[position]) > parseInt(aux_s[s.length -1 -position]) ? aux_s[position] : aux_s[s.length -1 -position];
        
        //change doing a if instead if ternary, know what to change
        aux_s[position] = highest;
        aux_s[s.length -1 -position] = highest;
        usedChanges++;
        
    }
    
    //iterar sobre lo obtenido
    let availableChanges = k - usedChanges;

    if(availableChanges){

        //change it to a while
        for (let i = 0; i < middle; i++) {
    
            if(positionsToChange.includes(i) && aux_s[i] != 9){
                aux_s[i] = "9";
                aux_s[aux_s.length -1 -i] = "9";
                availableChanges--;
        
                if(availableChanges) continue;
                else break;
                
            } else if( !positionsToChange.includes(i) && aux_s[i] != 9 && availableChanges > 1) {
                aux_s[i] = "9";
                aux_s[aux_s.length -1 -i] = "9";
                availableChanges -= 2;
        
                if(availableChanges) continue;
                else break;

            } else if(i == (aux_s.length -1)/2){
                aux_s[i] = "9";
            }
            
        }
    }

    return aux_s.join("");

}


const w = "12321";

const resp = highestValuePalindrome(w,3,1);
console.log(resp);