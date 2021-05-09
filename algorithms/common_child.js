//https://www.hackerrank.com/challenges/common-child/problem

const s2 = "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS";
const s1 = "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC";

const test = commonChild(s1, s2);

console.log(test);

function commonChild(s1, s2) {
    // Uses the Longest Common Subsequence algorithm (LCS)
    const size = s1.length + 1;

    let arr1 = s1.split("");
    let arr2 = s2.split("");
    
    // Create the empty matrix with the rigth size
    let matrix = new Array(size);


    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            
            if(i == 0 || j == 0){
                matrix[i][j] = 0;
            } 
            else if (arr1[j-1] == arr2[i-1]){
                matrix[i][j] = 1 + matrix[i-1][j-1];
            }else {
                matrix[i][j] = Math.max(matrix[i][j-1], matrix[i-1][j])
            }

        }
    }
    
    return matrix[size-1][size-1];
}