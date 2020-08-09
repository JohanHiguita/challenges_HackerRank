function encryption(s) {
    //remove white spaces
    const text = s.replace(/ /g,'');
    
    // get number of rows & columns
    const L = text.length;
    const numColumns = Math.ceil(Math.sqrt(L));
    const numRows = (numColumns -1)*numColumns < L ? numColumns : numColumns - 1; 

    const regExp = new RegExp('.{1,' + numColumns + '}', 'g')
    const rows = text.match(regExp);

    //get columns
    const columns = [];
    for (const word of rows) {
        for (let i = 0; i < word.length; i++) {

            if(!columns[i]){
                columns[i] = "";
            }
            
            columns[i] += word[i]; 
        }
    }

    return columns.join(" ");

}

const r = encryption("haveaniceday");

console.log(r);