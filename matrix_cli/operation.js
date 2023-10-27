import readlineSync from 'readline-sync';

const inputMatrix = () => {
    const rows = readlineSync.questionInt('Enter no of rows: ');
    const cols = readlineSync.questionInt('Enter no of cols: ');

    console.log("Your dimensions are " + rows + 'x' + cols);

    let mat = new Array(rows);

    /*
        mat = [
            <empty>,
            <empty>,
            <empty>,
        ]

    */

    for(let i=0; i< mat.length; i++){
        mat[i] = new Array(cols);
    }

    /*
    Iteration 1: i=0; mat[0] = [ <2 empty items> ]
    Iteration 2: i=1; mat[1] = [ <2 empty items> ]
    Iteration 3: i=2; mat[2] = [ <2 empty items> ]
    */

    /*
    [ [ <2 empty items> ], [ <2 empty items> ], [ <2 empty items> ] ]
    */

    for(let i=0; i<rows; i++){  //rows
        for(let j=0; j<cols; j++){ //cols
            mat[i][j] = readlineSync.questionInt(`Enter the value of index ${i}${j}: `)
        }
    }
    /*
                 ij
    Iteration 1: 00 
    Iteration 2: 01
    Iteration 3: 10
    Iteration 4: 11
    Iteration 5: 20
    Iteration 6: 21
    */

    return mat;
}

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
// const matrixMultiplication = (m1, m2) => {

//     //no of rows and cols should be equal if not error
//     if((m1.length != m2.length) || (m1[0].length != m2[0].length)){
//         console.log("Invalid Input: Your matrices must be of same dimensions");
//         return;
//     }

//     let multiplication = new Array(m1.length) //rows
//     for(let i=0; i<m1[0].length; i++){
//         multiplication[i] = new Array(m1[i].length) //cols
//     }

//     for(let i=0; i<multiplication.length; i++) { //rows
//         for(let j=0; j<multiplication[i].length; j++){
//             multiplication[i][j] = m1[i][j] * m2[i][j];
//         }
//     }

//     return multiplication;
// }
const printMatrix = (mat) => {
    let str="";
    for(let i=0; i< mat.length; i++){ //rows
        for(let j=0; j<mat[0].length; j++){ //cols
            str += mat[i][j] + " ";
        }
        console.log(str);
        str = "";
    }
}

export {
    inputMatrix,
    matrixAddition,
    matrixSubtraction,
    traceMatrix,
    transposeMatrix,
    // matrixMultiplication,
    printMatrix
}