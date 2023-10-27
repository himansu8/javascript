import readLineSync from "readline-sync"

// take no of row and cols
const inputmatrix = ()  => {
    const rows = readLineSync.questionInt(`Enter no of Rows : `);
    const cols = readLineSync.questionInt(`Enter no of Cols : `);
    console.log(rows + 'X' + cols);

    let mat = new Array(rows);              // create a 2d empty array with that rows and cols
    // console.log(mat);
    for (let i=0; i<mat.length; i++){
        mat[i] = new Array(cols);
    }
    // console.log(mat);
   //populate 2d array                                           
    for (let i=0; i<rows; i++){     //rows         
        for (let j=0; j<cols; j++){
            mat[i][j] = readLineSync.questionInt(`Enter the value of index ${i} ${j} : `)
        }
    }
    // console.log(mat); 
    return mat;
}
// inputmatrix();
const printmatrix = (mat) => {
    let str = "";
    for (let i=0; i<mat.length; i++){
       for ( let j=0; j<mat[0].length; j++){
        str += mat[i][j] + " ";
       }
       console.log(str);
       str = "";
    }
}
// printmatrix(inputmatrix());   

let m1 = inputMatrix();
// let m2 = inputMatrix();
printMatrix(m1);
// printMatrix(m2);

const matrixAddition = (m1, m2) => {

    //no of rows and cols should be equal if not error
    if((m1.length != m2.length) || (m1[0].length != m2[0].length)){
        console.log("Invalid Input: Your matrices must be of same dimensions");
        return;
    }

    let matSum = new Array(m1.length) //rows
    for(let i=0; i<m1[0].length; i++){
        matSum[i] = new Array(m1[i].length) //cols
    }

    for(let i=0; i<matSum.length; i++) { //rows
        for(let j=0; j<matSum[i].length; j++){
            matSum[i][j] = m1[i][j] + m2[i][j];
        }
    }

    return matSum;
}
// let sum = matrixAddition(m1, m2);
// printMatrix(sum);

const matrixSubtraction = (m1, m2) => {

    //no of rows and cols should be equal if not error
    if((m1.length != m2.length) || (m1[0].length != m2[0].length)){
        console.log("Invalid Input: Your matrices must be of same dimensions");
        return;
    }

    let diff = new Array(m1.length) //rows
    for(let i=0; i<m1[0].length; i++){
        diff[i] = new Array(m1[i].length) //cols
    }

    for(let i=0; i<diff.length; i++) { //rows
        for(let j=0; j<diff[i].length; j++){
            diff[i][j] = m1[i][j] - m2[i][j];
        }
    }

    return diff;
}

// let diff = matrixSubtraction(m1, m2);
// printMatrix(diff);

//---------------

// const twoDim = [ 
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
/*
00 01 02
10 11 12
20 21 22
*/


const traceMatrix = (m1) => {

    if(m1.length != m1[0].length){
        console.log("The matrix does not have proper diagonals")
        return;
    }

    let trace=0;
    for(let i=0; i<m1.length; i++){
        for(let j=0; j<m1[i].length; j++){
            if(i == j){
                trace += m1[i][j];
            }
        }
    }

    return trace;

}
// traceMatrix(m1);

const transposeMatrix = (m1) => {

    let matTrans = new Array(m1[0].length) //cols

    for(let i=0; i<m1[0].length; i++){
        matTrans[i] = new Array(m1.length) //rows
    }

    for(let i=0; i<m1.length; i++){
        for(let j=0; j<m1[0].length; j++){
            // console.log(i,j,"-->",m1[i][j]);
            matTrans[j][i] = m1[i][j];
        }
    }

    return matTrans;
}

// let transpose = transposeMatrix(m1);
// printMatrix(transpose);





